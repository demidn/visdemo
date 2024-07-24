import { Chain, createPublicClient, http } from 'viem';
import { avalanche } from 'viem/chains';

const createClient = (chain: Chain) => createPublicClient({ chain, transport: http() });
export const publicClient = createClient(avalanche);

