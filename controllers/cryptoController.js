const CryptoPrice = require("../models/CryptoPrice");

// Controller for /stats endpoint
const getStats = async (req, res) => {
  const { coin } = req.query;
  if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(coin)) {
    return res.status(400).json({ error: "Invalid coin" });
  }

  const data = await CryptoPrice.find({ cryptocurrency: coin })
    .sort({ created_at: -1 })
    .limit(1);
  if (data.length > 0) {
    const { price_usd, market_cap_usd, change_24h } = data[0];
    res.json({
      price: price_usd,
      marketCap: market_cap_usd,
      "24hChange": change_24h,
    });
  } else {
    res.status(404).json({ error: "Data not found for the requested coin" });
  }
};

// Controller for /deviation endpoint
const getDeviation = async (req, res) => {
  const { coin } = req.query;
  if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(coin)) {
    return res.status(400).json({ error: "Invalid coin" });
  }

  const data = await CryptoPrice.find({ cryptocurrency: coin })
    .sort({ created_at: -1 })
    .limit(100);
  if (data.length < 2) {
    return res
      .status(400)
      .json({ error: "Not enough data to calculate deviation" });
  }

  const prices = data.map((d) => d.price_usd);
  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const variance =
    prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
    prices.length;
  const deviation = Math.sqrt(variance);

  res.json({ deviation });
};

module.exports = { getStats, getDeviation };
