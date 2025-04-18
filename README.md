# **Quantora** - AI-Powered On-Chain Assistant

### 🚀 **What it does**

**Quantora** is a minimalist crypto analytics tool that tracks:

- Smart wallet activity  
- Volume spikes  
- Early token entries  
- On-chain trends

It delivers instant, actionable data in a clean UI — perfect for real-time decisions.

---

### 🔮 **Features**

- ✅ **Smart Wallet Alerts**
- ✅ **Volume Spike Detector**
- ✅ **Token Entry Radar**
- ✅ **Token Trend Analyzer**
- 🔜 **AI Entry Predictions**
- 🔜 **Micro Pump Anticipation**
- 🔜 **Whale Reaction Alerts**
- 🔜 **Volatility Pulse Index**
- 🔜 **Custom Wallet Tracking**
- 🔜 **Cross-chain Support (Sol / ETH)**
- 🔜 **Signal Feed + Discord/Twitter Integration**

---

### ✅ **Now (Live MVP)**

*Quantora is currently live with a minimal but powerful on-chain assistant.*

- **Smart Wallet Alerts**  
  Track top-performing wallets and receive real-time alerts on their actions.

- **Volume Spike Detection**  
  Instantly catch unusual volume bursts on newly active tokens.

- **Entry Radar**  
  Identify the first significant buys and smart money entries.

- **Token Trend Analyzer**  
  Quick token scoring based on volume, liquidity, and activity.

- **Minimalistic UI**  
  Clean interface built for speed and signal-first decision making.

---

### 🚧 **Q2 2025 (Coming Soon)**

*Enhanced insights, AI predictions, and signal feeds.*

- **Smart Entry Predictor (AI-powered)**  
  Predicts high-probability entries based on smart wallet patterns.

- **Micro Pump Anticipator**  
  Detects patterns indicating potential short-term pumps.

- **Whale Reaction Monitor**  
  Highlights major wallet moves reacting to on-chain volume changes.

- **Volatility Pulse Index**  
  Real-time index to visualize market tension and volatility.

---
##⚡**Main formulas**
### 🌐 **Q3 2025 (Planned Expansion)**

*Cross-chain support and personalized tracking tools.*

- **Cross-Chain Mode**  
  Minimal UI remains the same, now with multi-chain support.

- **Custom Wallet Tracking**  
  Add your own wallets for personalized smart alerts.

- **On-Chain Signal Feed**  
  Live stream of token signals based on multiple real-time metrics.

- **Nexus Feed Integration (Experimental)**  
  Optional Twitter/Discord bot sync for signal broadcasting.

---
##  **1. Volatility Delta (%)**
### 📈 **1. Volatility Delta (%)**

Evaluates dynamic volatility relative to a stable norm:

function calculateVolatilityDelta(currentStdDev, historicMean) {
  return ((currentStdDev / historicMean) * 100).toFixed(1); // % 
}

- currentStdDev: current standard deviation of prices
- historicMean: average volatility over X hours

### 2. 🧠 **Smart Wallet Signal**
Analyzes the share of addresses with a high Trust Score (or previous profits):
function smartWalletSignal(activeSmartWallets, totalWallets) {
  const ratio = activeSmartWallets / totalWallets;
  if (ratio > 0.25) return "Strong signal";
  if (ratio > 0.1) return "Moderate activity";
  return "No signal";
}

- activeSmartWallets: number of verified “smart” addresses

- totalWallets: total number of unique wallets trading the token

### 🔄 3. **Volume Spike Index (%)**
Shows abnormal volume growth over the last 15 minutes compared to previous periods:

function volumeSpikeIndex(currentVolume, avgPreviousVolume) {
  return ((currentVolume / avgPreviousVolume) * 100).toFixed(1); // % 
}

### 🫀 4. **Token Pulse Grade (A–D)**
Evaluates the "vitality" of a token based on several internal indexes:
function tokenPulseGrade(volatility, spikeIndex, smartScore) {
  if (volatility < 30 && spikeIndex < 120 && smartScore === "Strong signal") return "A";
  if (volatility < 50 && spikeIndex < 200) return "B";
  if (volatility > 50 || spikeIndex > 250) return "C";
  return "D";
}
### 🔎 5.** Whale Presence**
Assesses the influence of large wallets on a token:

function whalePresence(topWalletShare, transactionCount) {
  if (topWalletShare > 40 && transactionCount < 10) return "High Dominance";
  if (topWalletShare > 25) return "Moderate Presence";
  return "Low Impact";
}

### 🧪 6. **Liquidity Depth Score (0–100)**
Pseudo-analysis of pool depth:
function liquidityDepthScore(poolETH, tokenMarketCap) {
  const ratio = poolETH / tokenMarketCap;
  return Math.min(Math.floor(ratio * 1000), 100); // scaled to 100
}

---

### 🧪 **Tech Stack**
- Chrome Extension SDK
- DexScreener API
- JavaScript / HTML / CSS
- AI-based signal evaluation (upcoming)

---
### 📎 **Official Links**

- **Website**: [YourWebsiteLink](https://www.example.com)
- **GitHub**: [Quantora GitHub Repository](https://github.com/yourusername/quantora)
- **Twitter**: [@Quantora_Tech](https://twitter.com/Quantora_Tech)

