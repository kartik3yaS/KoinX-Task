const { fetchCryptoData } = require("../services/cryptoService");

const startCronJob = () => {
  setInterval(async () => {
    console.log("Cron job is running...");
    try {
      await fetchCryptoData();
    } catch (error) {
      console.error("Error in cron job execution:", error);
    }
  }, 7200000);

  console.log("Cron job scheduled to run every 2 hours.");
};

module.exports = startCronJob;
