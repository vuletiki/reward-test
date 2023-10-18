const configs = [
    {
      networkId: 'astra_testnet',
      ethereumRpc: 'https://rpc.astranaut.dev',
      api: 'https://api.astranaut.dev',
      cosmosRpc: 'https://cosmos.astranaut.dev',
      feemarket: '/evmos/feemarket/v1/params',
      chainId: 'astra_11115-1',
      chainIdNumber: 11115,
      chainName: 'Testnet',
      currencies: [
        {
          coinDenom: 'ASA',
          coinMinimalDenom: 'aastra',
          coinDecimals: 18,
          coinGeckoId: 'aastra',
          coinImageUrl:
            'https://cdn.astranaut.io/static/1c4364d0-9b21-4092-b7cc-58a747d838a4.png',
          contractAddress: '',
        },
        {
          coinDenom: 'USDT',
          coinMinimalDenom: 'usdt',
          coinDecimals: 18,
          coinGeckoId: 'usdt',
          coinImageUrl:
            'https://cdn.astranaut.io/static/c9fbd553-c131-488f-bcf4-77c9a21dfe8c.png',
          contractAddress: '0x2039A56173fDac411975Bce6F756059Ac33d0d79',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'ASA',
          coinMinimalDenom: 'aastra',
          coinDecimals: 18,
          coinGeckoId: 'aastra',
          coinImageUrl:
            'https://salt.tikicdn.com/ts/upload/2a/74/6d/1000f0249fd530a9313a07fc3e13c1b2.png',
        },
      ],
      stakeCurrency: {
        coinDenom: 'ASA',
        coinMinimalDenom: 'aastra',
        coinDecimals: 18,
        coinGeckoId: 'aastra',
        coinImageUrl:
          'https://cdn.astranaut.io/static/1c4364d0-9b21-4092-b7cc-58a747d838a4.png',
      },
      rewardApi: 'https://reward-api.astranaut.dev',
      // backendApi: 'https://reward-app-api.astranaut.dev/api/v1',
      backendApiV2: 'https://reward-app-api.astranaut.dev/api/v2',
      backendApiV3: 'https://reward-app-api.astranaut.dev/api/v3',
      affiliateApi: 'https://affiliate-api.astranaut.dev/api/v1',
      notificationApi: 'https://notify.astranaut.dev',
      stakingWebApp: 'https://app.astranaut.dev/',
      dex: 'https://defi.astranaut.dev/',
      bridge: 'https://bridge.astranaut.dev/',
      txExplorer: {
        name: 'Astra Explorer',
        txUrl: 'https://explorer.astranaut.dev/tx/{txHash}',
      },
      baseFee: {
        evm: '973457995819',
      },
      programFactoryContractAddress: '0xc8051Afb56F88043637678F968d18aBe55d6391D',
      bscUSDT: {
        contractDataPrefix: '0x70a08231000000000000000000000000',
        contractAddress: '0x2039A56173fDac411975Bce6F756059Ac33d0d79',
      },
      baseShareLink: 'https://astranaut.tala.xyz/astrarewards/',
      hcapchaSiteKey: 'ec2a1ebd-061b-426d-b2e4-a1377129f0fc',
      baseShareReferral: 'https://astranaut.tala.xyz/themban/',
    },
    {
      networkId: 'astra_mainnet',
      ethereumRpc: 'https://rpc.astranaut.io',
      api: 'https://api.astranaut.io',
      cosmosRpc: 'https://cosmos.astranaut.io:26657',
      feemarket: '/ethermint/feemarket/v1/params',
      chainId: 'astra_11110-1',
      chainIdNumber: 11110,
      chainName: 'Mainnet',
      currencies: [
        {
          coinDenom: 'ASA',
          coinMinimalDenom: 'aastra',
          coinDecimals: 18,
          coinGeckoId: 'aastra',
          coinImageUrl:
            'https://cdn.astranaut.io/static/1c4364d0-9b21-4092-b7cc-58a747d838a4.png',
          contractAddress: '',
        },
        {
          coinDenom: 'USDT',
          coinMinimalDenom: 'usdt',
          coinDecimals: 18,
          coinGeckoId: 'usdt',
          coinImageUrl:
            'https://cdn.astranaut.io/static/c9fbd553-c131-488f-bcf4-77c9a21dfe8c.png',
          contractAddress: '0x5fC4435AcA131f1F541D2fc67DC3A6a20d10a99d',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'ASA',
          coinMinimalDenom: 'aastra',
          coinDecimals: 18,
          coinGeckoId: 'aastra',
          coinImageUrl:
            'https://salt.tikicdn.com/ts/upload/2a/74/6d/1000f0249fd530a9313a07fc3e13c1b2.png',
        },
      ],
      stakeCurrency: {
        coinDenom: 'ASA',
        coinMinimalDenom: 'aastra',
        coinDecimals: 18,
        coinGeckoId: 'aastra',
        coinImageUrl:
          'https://cdn.astranaut.io/static/1c4364d0-9b21-4092-b7cc-58a747d838a4.png',
      },
      rewardApi: 'https://reward-api.astranaut.io',
      // backendApi: 'https://reward-app-api.astranaut.io/api/v1',
      backendApiV2: 'https://reward-app-api.astranaut.io/api/v2',
      backendApiV3: 'https://reward-app-api.astranaut.io/api/v3',
      affiliateApi: 'https://affiliate-api.astranaut.io/api/v1',
      notificationApi: 'https://notify.astranaut.io/',
      stakingWebApp: 'https://reward.astranaut.io/',
      dex: 'https://solarswap.io/',
      bridge: 'https://bridge.astranaut.io/',
      txExplorer: {
        name: 'Astra Explorer',
        txUrl: 'https://explorer.astranaut.io/tx/{txHash}',
      },
      baseFee: {
        evm: '969763705667',
      },
      programFactoryContractAddress: '0x603272D5B065837e75b3631BaA2Af6dDfA90E8aC',
      bscUSDT: {
        contractDataPrefix: '0x70a08231000000000000000000000000',
        contractAddress: '0x5fC4435AcA131f1F541D2fc67DC3A6a20d10a99d',
      },
      baseShareLink: 'https://astranaut.io/astrarewards/',
      hcapchaSiteKey: 'cbf4df2e-3437-45a7-99e7-d10871efbf9e',
      baseShareReferral: 'https://astranaut.io/themban/',
    },
  ];

module.exports = configs;