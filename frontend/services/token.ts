export interface TokenData {
  name: string;
  volume: number;
  txCount: number;
  uniqueWallets: number;
}

export function calculateTokenScore(data: TokenData): number {
  const volumeScore = Math.min(data.volume / 1000, 40);
  const txScore = Math.min(data.txCount * 0.5, 30);
  const walletScore = Math.min(data.uniqueWallets * 0.4, 30);
  return Math.round(volumeScore + txScore + walletScore);
}