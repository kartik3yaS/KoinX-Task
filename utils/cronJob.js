const cron = require("node-cron");
const { fetchCryptoData } = require("../services/cryptoService");

const startCronJob = () => {
  cron.schedule("0 */2 * * *", async () => {
    console.log("Cron job is running...");
    try {
      await fetchCryptoData();
    } catch (error) {
      console.error("Error in cron job execution:", error);
    }
  });

  console.log("Cron job scheduled to run every 2 hours.");
};

module.exports = startCronJob;
