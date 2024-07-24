interface Pool {
  tokenX: string;
  tokenY: string;
  address: `0x${string}`;
}

export const POOLS: Pool[] = [
  { tokenX: 'AVAX', tokenY: 'USDC', address: '0xD446eb1660F766d533BeCeEf890Df7A69d26f7d1' },
  { tokenX: 'BTC.b', tokenY: 'USDC', address: '0xD9fa522F5BC6cfa40211944F2C8DA785773Ad99D' },
  { tokenX: 'AVAX', tokenY: 'USDT', address: '0x87EB2F90d7D0034571f343fb7429AE22C1Bd9F72' },
];

export const TOKEN_IMAGE: Record<string, string> = {
  USDC: 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png',
  USDT: 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7/logo.png',
  'BTC.b': 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x152b9d0FdC40C096757F570A51E494bd4b943E50/logo.png',
  WAVAX: 'https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg',
  AVAX: 'https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg',
};
