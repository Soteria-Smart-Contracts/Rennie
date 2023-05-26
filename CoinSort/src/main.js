let Coins = document.getElementById('Coins');

function addCoinContainer(name, ticker, marketCap, price) {
    // Clone the Bitcoin container
    const btcContainer = document.getElementById("BTC");
    const newContainer = btcContainer.cloneNode(true);
  
    // Update the content of the cloned container
    newContainer.querySelector(".logo img").alt = name + " logo";
    newContainer.querySelector(".info span:first-child").textContent = name;
    newContainer.querySelector(".info .ticker").textContent = "Ticker: " + ticker;
    newContainer.querySelector(".info .market-cap").textContent = "Market Cap: " + formatMarketCap(marketCap);
    newContainer.querySelector(".info .price").textContent = "Price: " + price;
  
    // Append the cloned container to the Coins div
    const coinsDiv = document.getElementById("Coins");
    coinsDiv.appendChild(newContainer);
  }
  
  // Format the market cap value
  function formatMarketCap(marketCap) {
    const num = parseInt(marketCap.replace(/\D/g, ""));
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else {
      return marketCap;
    }
  }  

function ShowCoins(Setting){
    if(Setting){
        Coins.style.display = '';
    }
    else{
        Coins.style.display = 'none';
    }
}