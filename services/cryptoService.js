const axios = require("axios");
const CryptoPrice = require("../models/CryptoPrice");

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true";

const fetchCryptoData = async () => {
  try {
    const response = await axios.get(COINGECKO_URL);
    const data = response.data;
    const cryptoData = [
      {
        cryptocurrency: "bitcoin",
        price_usd: data.bitcoin.usd,
        market_cap_usd: data.bitcoin.usd_market_cap,
        change_24h: data.bitcoin.usd_24h_change,
      },
      {
        cryptocurrency: "matic-network",
        price_usd: data["matic-network"].usd,
        market_cap_usd: data["matic-network"].usd_market_cap,
        change_24h: data["matic-network"].usd_24h_change,
      },
      {
        cryptocurrency: "ethereum",
        price_usd: data.ethereum.usd,
        market_cap_usd: data.ethereum.usd_market_cap,
        change_24h: data.ethereum.usd_24h_change,
      },
    ];
    await CryptoPrice.create(cryptoData);
    console.log("Data saved successfully!");
  } catch (error) {
    console.error("Error fetching or saving data:", error);
  }
};

module.exports = { fetchCryptoData };
