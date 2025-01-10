# KoinX Task

## Overview

This is a server-side application built using **Node.js** and **MongoDB**. It fetches cryptocurrency data (Bitcoin, Ethereum, and Matic) every 2 hours and stores it in a MongoDB database. It also exposes two APIs: one to retrieve the latest data of a cryptocurrency and another to calculate the standard deviation of the price for the last 100 records stored in the database.

## Deployed Application

You can access the deployed application at the following URL:

### Deployed API Base URL
- [https://koinx-task-mz3r.onrender.com](https://koinx-task-mz3r.onrender.com)

### Sample Endpoints:

1. **Get Cryptocurrency Stats**  
   Fetch the latest stats (price, market cap, 24h change) for a specific cryptocurrency:
   ```http
   GET https://koinx-task-mz3r.onrender.com/api/stats?coin=ethereum

2. There are few other endpoints created as said in task which also can be accessed.

## Features

- **Background Job**: Fetches real-time cryptocurrency data every 2 hours using the CoinGecko API and stores it in the database.
- **/stats API**: Returns the latest price, market cap, and 24-hour change for the requested cryptocurrency.
- **/deviation API**: Calculates the standard deviation of the price of a requested cryptocurrency based on the last 100 records in the database.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Framework for building the API and handling routes.
- **MongoDB**: NoSQL database to store cryptocurrency data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Axios**: Promise-based HTTP client for making requests to external APIs.
- **Cron Job**: Used for scheduling the background job to fetch cryptocurrency data every 2 hours.
- **Dotenv**: Used to manage environment variables securely.
- **Render**: Platform to deploy the application.

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/kartik3yaS/KoinX-Task.git
cd KoinX-Task
