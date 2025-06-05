from analytics import analyze_market

def main():
    print("📊 Launching backend analysis...")
    result = analyze_market([100, 120, 140, 130, 170])
    print("Market Insight:", result)

if __name__ == "__main__":
    main()