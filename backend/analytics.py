def analyze_market(data):
    avg = sum(data) / len(data)
    trend = data[-1] - data[0]
    if trend > 0 and data[-1] > avg:
        return "Upward Trend Detected"
    elif trend < 0:
        return "Downward Pressure"
    return "Sideways/Neutral"