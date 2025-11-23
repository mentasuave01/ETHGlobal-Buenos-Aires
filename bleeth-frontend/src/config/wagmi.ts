import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,

} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Bleeth',
  projectId: '4af392ffa02f1bdc4bb2eb09643c55c6',
  chains: [
    base,
  ],
  ssr: true,
});
