document.addEventListener("DOMContentLoaded", function () {

  
  // Elements to display the results in the second popup
  const volatilityDeltaElement = document.getElementById('volatilityDelta');
  const smartWalletSignalElement = document.getElementById('smartWalletSignal');
  const volumeSpikeElement = document.getElementById('volumeSpike');
  const tokenPulseGradeElement = document.getElementById('tokenPulseGrade');

  
  const userTokenInput = document.getElementById('userTokenInput');

  // Get the token entered by the user from localStorage
  const userToken = localStorage.getItem("selectedToken");

  // Display the user token on the second screen
  if (userTokenInput) {
    userTokenInput.innerHTML = userToken;
  }

  // Example of initial data values for the functions with randomization
  const currentStdDev = 0.02 + Math.random() * 0.02;  // Random current standard deviation
  const historicMean = 0.01 + Math.random() * 0.005;  // Random historic mean for volatility

  const activeSmartWallets = 50 + Math.floor(Math.random() * 100); // Random active smart wallets
  const totalWallets = 200 + Math.floor(Math.random() * 100); // Random total wallets
  
  const currentVolume = 1500000 + Math.floor(Math.random() * 500000); // Random current volume
  const avgPreviousVolume = 1000000 + Math.floor(Math.random() * 300000); // Random average volume

  const volatility = 40 + Math.random() * 30; // Random volatility value
  const spikeIndex = 100 + Math.random() * 200; // Random spike index
  const smartScore = Math.random() > 0.5 ? "Strong signal" : "No signal"; // Random smart wallet score
  
  const topWalletShare = Math.random() * 100; // Random top wallet share percentage
  const transactionCount = Math.floor(Math.random() * 20); // Random transaction count

  const pool = 1000000 + Math.floor(Math.random() * 1000000); // Random pool value
  const tokenMarketCap = 10000000 + Math.floor(Math.random() * 5000000); // Random token market cap

  // Function Definitions

  // 1. Volatility Delta
  function calculateVolatilityDelta(currentStdDev, historicMean) {
    return ((currentStdDev / historicMean) * 100).toFixed(1); // % 
  }

  // 2. Smart Wallet Signal
  function smartWalletSignal(activeSmartWallets, totalWallets) {
    const ratio = activeSmartWallets / totalWallets;
    if (ratio > 0.25) return "Strong signal";
    if (ratio > 0.1) return "Moderate activity";
    return "No signal";
  }

  // 3. Volume Spike Index
  function volumeSpikeIndex(currentVolume, avgPreviousVolume) {
    return ((currentVolume / avgPreviousVolume) * 100).toFixed(1); // %
  }

  // 4. Token Pulse Grade
  function tokenPulseGrade(volatility, spikeIndex, smartScore) {
    if (volatility < 30 && spikeIndex < 120 && smartScore === "Strong signal") return "A";
    if (volatility < 50 && spikeIndex < 200) return "B";
    if (volatility > 50 || spikeIndex > 250) return "C";
    return "D";
  }

  // 5. Whale Presence
  function whalePresence(topWalletShare, transactionCount) {
    if (topWalletShare > 40 && transactionCount < 10) return "High Dominance";
    if (topWalletShare > 25) return "Moderate Presence";
    return "Low Impact";
  }

  // 6. Liquidity Depth Score
  function liquidityDepthScore(pool, tokenMarketCap) {
    const ratio = pool / tokenMarketCap;
    return Math.min(Math.floor(ratio * 1000), 100); // scaled to 100
  }

  // Run calculations based on the example data
  const volatilityDelta = calculateVolatilityDelta(currentStdDev, historicMean);
  const smartWalletSignalResult = smartWalletSignal(activeSmartWallets, totalWallets);
  const volumeSpike = volumeSpikeIndex(currentVolume, avgPreviousVolume);
  const tokenPulseGradeResult = tokenPulseGrade(volatility, spikeIndex, smartScore);
  const whalePresenceResult = whalePresence(topWalletShare, transactionCount);
  const liquidityDepthScoreResult = liquidityDepthScore(pool, tokenMarketCap);

});