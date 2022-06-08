
const axios = require("axios");
const apiUrl = "https://api.binance.com/api/v3/klines?symbol"

const monitor =  async (coinName, timeframe) => {
    const response = await axios.get(`${apiUrl}=${coinName}&interval=${timeframe}`);
    return response.data;
}