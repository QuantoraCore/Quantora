# **Quantora** - AI-Powered On-Chain Assistant

### 🚀 **What it does**

**Quantora** is a minimalist crypto analytics tool that tracks:

- Smart wallet activity  
- Volume spikes  
- Early token entries  
- On-chain trends

It delivers instant, actionable data in a clean UI — perfect for real-time decisions.

---
### 📎 **Official Links**

- **Website**: [YourWebsiteLink](https://quantoracore.com)
- **GitHub**: [Quantora GitHub Repository](https://github.com/yourusername/quantora)
- **Gitbook**: [Quantora Gitbook Documentation](https://quantoracore.gitbook.io/quantoracore)
- **Twitter**: [@Quantora_Tech](https://twitter.com/Quantora_Tech)
- **Email**: [Quantoracore@gmail.com]
---

## ✅ Key Features

### 🚨 Smart Wallet Alerts  
Track top-performing wallets and get notified the moment they make significant moves.  
Stay ahead of the market by following proven actors.

### 📈 Volume Spike Detector  
Instantly catch unusual surges in token volume.  
Perfect for identifying early-stage pumps or manipulation signals.

### 🎯 Token Entry Radar  
Detect significant early buys by "smart money".  
Helps you front-run whales and informed actors.

### 📊 Token Trend Analyzer  
Visualize token trends using liquidity, volume, and on-chain patterns.  
Identify shifts before they go mainstream.

### 🧼 Minimalistic UI  
No clutter, just clarity.  
A clean, distraction-free interface that focuses on what matters most — decision-making in real-time.

---
## 🗺️ Quantora Roadmap

Quantora evolves through progressive rollout phases, each unlocking new layers of intelligence, prediction, and integration.

---

### ✅ Phase 1: MVP (Live)  
**Status:** Released Q3 2025  
The core signal engine is live and actively scanning the Solana network.

- 📡 Smart Wallet Alerts  
- 📈 Volume Spike Detection  
- 🎯 Token Entry Radar *(Beta)*  
- 📊 Token Trend Analyzer  
- 🔗 Discord-based **PulseKey** System  
- 🧬 $QNT Token Access Layer  

---

### 🟣 Phase 2: In Progress (Building)  
**ETA:** Q4 2025  
This phase deepens Quantora’s analytical logic and expands role automation.

- 🧠 AI Smart Entry Predictor  
- 🚨 Micro Pump Anticipator  
- 🐋 Whale Reaction Monitor  
- 📉 Volatility Pulse Index  
- 🧩 Expanded Role Sync + Auto-Upgrades  

---

### 🔴 Phase 3: Expansion (Planned)  
**ETA:** Q4 2025 – Q1 2026  
Quantora will scale across chains and broadcast channels to reach new ecosystems.

- 🌉 Cross-Chain Mode *(Solana + EVM)*  
- 👛 Custom Wallet Tracking  
- 📶 On-Chain Signal Feed  
- 🛰️ Nexus Feed Integration *(Discord/Twitter Bots)*  


---
##  ⚡**Main formulas**
### 📈 **1. Volatility Delta (%)**

Evaluates dynamic volatility relative to a stable norm:
```javascript
function calculateVolatilityDelta(currentStdDev, historicMean) {
  return ((currentStdDev / historicMean) * 100).toFixed(1); // % 
}
```
- currentStdDev: current standard deviation of prices
- historicMean: average volatility over X hours

### 2. 🧠 **Smart Wallet Signal**
Analyzes the share of addresses with a high Trust Score (or previous profits):
```javascript
function smartWalletSignal(activeSmartWallets, totalWallets) {
  const ratio = activeSmartWallets / totalWallets;
  if (ratio > 0.25) return "Strong signal";
  if (ratio > 0.1) return "Moderate activity";
  return "No signal";
}
```
- activeSmartWallets: number of verified “smart” addresses
- totalWallets: total number of unique wallets trading the token

### 🔄 3. **Volume Spike Index (%)**
Shows abnormal volume growth over the last 15 minutes compared to previous periods:
```javascript
function volumeSpikeIndex(currentVolume, avgPreviousVolume) {
  return ((currentVolume / avgPreviousVolume) * 100).toFixed(1); // % 
}
```

### 🫀 4. **Token Pulse Grade (A–D)**
Evaluates the "vitality" of a token based on several internal indexes:
```python
def token_pulse_grade(volatility, spike_index, smart_score):
    """
    Returns a grade (A–D) reflecting token momentum.
    A = low volatility + low spike + strong signal
    B = moderate stats
    C = high volatility or large spikes
    D = fallback grade
    """
    if volatility < 30 and spike_index < 120 and smart_score == "Strong signal":
        return "A"
    if volatility < 50 and spike_index < 200:
        return "B"
    if volatility > 50 or spike_index > 250:
        return "C"
    return "D"

```

### 🔎 5.** Whale Presence**
Assesses the influence of large wallets on a token:
```python
def whale_presence(top_wallet_share, transaction_count):
    """
    Categorizes whale impact:
    - High Dominance: very concentrated with low activity
    - Moderate Presence: moderately concentrated
    - Low Impact: evenly distributed
    """
    if top_wallet_share > 40 and transaction_count < 10:
        return "High Dominance"
    if top_wallet_share > 25:
        return "Moderate Presence"
    return "Low Impact"

```

### 🧪 6. **Liquidity Depth Score (0–100)**
Pseudo-analysis of pool depth:
```python
def liquidity_depth_score(pool, token_market_cap):
    """
    Calculates a scaled liquidity score (0–100).
    Based on the ratio of liquidity pool size to token market cap.
    """
    ratio = pool / token_market_cap
    return min(int(ratio * 1000), 100)
```

---

### 🧪 **Tech Stack**
- Chrome Extension SDK
- DexScreener API
- JavaScript / HTML / CSS
- AI-based signal evaluation (upcoming)

---

## 🧠 Final Thoughts

Quantora is more than just a signal tool — it's a lightweight on-chain companion built for traders who value clarity, speed, and intelligence. By combining real-time analytics, predictive models, and an evolving access system, Quantora empowers users to navigate markets with sharper insight and faster reactions.

Whether you're tracking smart wallets, spotting volume anomalies, or catching early token entries, Quantora delivers the pulse of the market — right from your browser.

Stay ahead of the curve. Stay synced with the chain.

— The Quantora Team


