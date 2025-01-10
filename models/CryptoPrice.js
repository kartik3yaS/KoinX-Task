const mongoose = require("mongoose");

const cryptoPriceSchema = new mongoose.Schema({
  cryptocurrency: { type: String, required: true },
  price_usd: { type: Number, required: true },
  market_cap_usd: { type: Number, required: true },
  change_24h: { type: Number, required: true },
  created_at: { type: Date, default: Date.now() },
});

const CryptoPrice = mongoose.model("CryptoPrice", cryptoPriceSchema);

module.exports = CryptoPrice;
