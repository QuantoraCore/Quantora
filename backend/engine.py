def token_health_score(volume, tx_count, unique_wallets):
    volume_score = min(volume / 1000, 40)
    tx_score = min(tx_count * 0.5, 30)
    wallet_score = min(unique_wallets * 0.4, 30)
    return round(volume_score + tx_score + wallet_score, 2)

def generate_report(token_name, volume, tx_count, unique_wallets):
    score = token_health_score(volume, tx_count, unique_wallets)
    verdict = "Good" if score > 75 else "Moderate" if score > 50 else "Poor"
    return f"{token_name}: Health Score = {score} ({verdict})"