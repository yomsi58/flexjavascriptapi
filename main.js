const API_KEY = "296d714fe99bc9ffdffb6511e9fb72a1"

async function getCryptoData() {
    const url = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    
    let result = await fetch(url);
    let data = await result.json();

    const bitcoinPrice = data.rates.BTC;
    const ethereumPrice = data.rates.ETH;
    const binancePrice = data.rates.BNB;
    const tetherPrice = data.rates.USDT;
    

    document.getElementById('bitcoin-price').innerHTML = '$' + bitcoinPrice
    document.getElementById('ethereum-price').innerHTML = '$' + ethereumPrice
    document.getElementById('binance-price').innerHTML = '$' + binancePrice
    document.getElementById('tether-price').innerHTML = '$' + tetherPrice   

}

getCryptoData()