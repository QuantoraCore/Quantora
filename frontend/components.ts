interface TokenOverview {
  name: string;
  risk: number;
  volume: number;
}

function renderToken(token: TokenOverview): void {
  const color = token.risk > 70 ? "🔴" : token.risk > 40 ? "🟠" : "🟢";
  console.log(`${color} ${token.name} — Risk: ${token.risk} | Volume: ${token.volume}`);
}

const tokens: TokenOverview[] = [
  { name: "Alpha", risk: 75, volume: 120000 },
  { name: "Beta", risk: 45, volume: 90000 },
  { name: "Gamma", risk: 25, volume: 65000 },
];

tokens.forEach(renderToken);