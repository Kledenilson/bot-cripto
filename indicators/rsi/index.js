function rsi(closes, nCandles){

    let gains = 0;
    let losses = 0;

    for(let i = closes.length - nCandles; i < closes.length; i++ ){
        const diff = closes[i] - closes[i - 1];
        if(diff >= 0)
            gains += diff;
        else    
            losses -= diff;

        const strength = gains / losses;
        return 100 - (100 / 1 + strength);
    }

}