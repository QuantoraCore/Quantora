def log_event(event_type, message):
    with open("logs.txt", "a") as f:
        f.write(f"[{event_type}] {message}\n")

def simulate_logs():
    events = ["Wallet Scan", "Anomaly Detected", "API Fetch", "Token Updated"]
    for e in events:
        log_event("INFO", f"Event: {e}")

if __name__ == "__main__":
    simulate_logs()