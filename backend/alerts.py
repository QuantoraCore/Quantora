def risk_alert(score):
    if score >= 90:
        return "🚨 CRITICAL RISK"
    elif score >= 70:
        return "⚠️ High Risk"
    elif score >= 50:
        return "🟡 Medium Risk"
    return "🟢 Low Risk"

def alert_summary(token, score):
    level = risk_alert(score)
    return f"{token}: {level} (Score: {score})"