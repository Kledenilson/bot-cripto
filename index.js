
require("./config/bot/index.js");
const monitor = require("./operations/monitor/index.js");

console.log('Bot Crypto iniciado...');


let sectionPrices = [];

async function process(){
    let buyPrice;
    let sellPrice; 
  
    const coin = monitor.monitor(bot.coin, bot.timeframe);
    const candle = coin[499];
    const price = parseFloat(candle[4]);
    const lastPrice = sectionPrices.length > 0 ? sectionPrices[sectionPrices.length -1] : price;
    sectionPrices.push(price);
    const candleMed20 = response.data.slice(479, 499);
    const initialPrice = parseFloat(candleMed20[0][4]);
    const finalPrice = parseFloat(candleMed20[19][4]);
    buyPrice = finalPrice;
    sellPrice = initialPrice;   

    console.log("\n");    
    let datetime = new Date().toLocaleString();
    console.log(coinName," ----- " + datetime);

    if(lastPrice < price)
    console.log("++ Preço subiu...")
    else if(lastPrice == price)
    console.log("== Preço sem alteração...")
    else
    console.log("-- Preço desceu...")

    console.log("Em 20 velas... Maior preço: " + initialPrice + " | Menor Preço: " + finalPrice);
    console.log("Preço atual: " + price);

    if(price <= buyPrice)
        console.log("Recomendo >>COMPRAR<< a: " + price);
    else if(price >= sellPrice)
        console.log("Recomendo <<VENDER>> a: " + price);
    else
        console.log("Aguardando oportunidade...");

        console.log("\n");    

        console.log("-------------------------------------------------------------------");
}


setInterval(process, 2000);