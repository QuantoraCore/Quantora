export function formatCurrency(value: number): string {
  return `$${(value / 1000).toFixed(1)}k`;
}

export function riskLabel(score: number): string {
  if (score >= 80) return "High";
  if (score >= 50) return "Medium";
  return "Low";
}