const express = require("express");
const dotenv = require("dotenv");
const cryptoRoutes = require("./routes/cryptoRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", cryptoRoutes);

module.exports = app;
