const { keccak256 } = require('@ethersproject/keccak256');
const { Wallet } = require('@ethersproject/wallet');
const configs = require("./config");
const { default: axios } = require("axios");
const config = configs[1];

const mnemonic =
  "saddle click spawn install mutual visa usage eyebrow awesome inherit rifle moon giraffe deposit reduce east gossip ice salute hill fire require knife traffic";
let accessToken = '';
const wallet = Wallet.fromMnemonic(mnemonic);

async function login() {
  const createdAtUnix = Math.round(+new Date() / 1000);
  const payload = {
    address: wallet.address,
    expired_at: createdAtUnix + 3600,
    created_at: createdAtUnix,
    client: "reward-app",
  };
  const sortedPayload = {};
  Object.entries(payload)
    .sort()
    .forEach(([key, val]) => {
      sortedPayload[key] = val;
    });

  const msgToSign = keccak256(Buffer.from(JSON.stringify(sortedPayload)));

  // Sign the digest
  const signature = await wallet._signingKey().signDigest(msgToSign);
  const signMessage =
    signature.r +
    signature.s.substring(2, signature.s.length) +
    (signature.recoveryParam ? "01" : "00");

    const r = signature.r;
    const s = signature.s;
    const v = signature.recoveryParam;

  try {
    const { data } = await axios({
      url: `${config.backendApiV2}/users`,
      method: "POST",
      data: {
        address: wallet.address,
        sign_message: signMessage,
        created_at: createdAtUnix,
        expired_at: createdAtUnix + 3600,
      },
    });
    accessToken = data.accessToken;
    console.log("LOGIN SUCCESS");
  } catch (e) {
    console.log("LOGIN FAILED");
  }
  // console.log(data)
}

const api = options => axios({
  ...options,
  headers: {
    'Authorization': accessToken
  }
})

const run = async () => {
  await login();
  const {data: user}  = await api({
    url: config.backendApiV2 + '/users'
  })
  console.log({
    accessToken,
    user
  })
}


run();