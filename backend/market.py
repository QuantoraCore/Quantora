import random

def simulate_market_event():
    events = ["Whale Buy", "Liquidity Pull", "Rug Warning", "Stable Accumulation"]
    return random.choice(events)

def calculate_liquidity_score(pool_size, locked_ratio):
    score = (pool_size * 0.0004) + (locked_ratio * 50)
    return min(round(score), 100)

def volatility_trend(data):
    diffs = [abs(data[i] - data[i-1]) for i in range(1, len(data))]
    avg_vol = sum(diffs) / len(diffs)
    return "High Volatility" if avg_vol > 10 else "Stable"