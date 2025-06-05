import { TokenData, calculateTokenScore } from "../services/token";

function renderTokenReport(token: TokenData): void {
  const score = calculateTokenScore(token);
  const level = score > 75 ? "🟢 Good" : score > 50 ? "🟡 Moderate" : "🔴 Poor";
  console.log(`Token ${token.name} → Score: ${score} (${level})`);
}

const sampleToken: TokenData = {
  name: "Alpha",
  volume: 90000,
  txCount: 50,
  uniqueWallets: 100
};

renderTokenReport(sampleToken);