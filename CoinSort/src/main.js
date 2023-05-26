let Opener = document.getElementById('Opener');
let App = document.getElementById('App');
ShowCoins(true);

function AddCoin(name, ticker, marketCap, price) {
    const btcContainer = document.getElementById("BTC");
    const newContainer = btcContainer.cloneNode(true);
  
    newContainer.id = ticker;
    newContainer.querySelector(".logo img").src = ""; // Set the logo URL here
    newContainer.querySelector(".info #BTC-name").textContent = name;
    newContainer.querySelector(".info .ticker #BTC-ticker").textContent = ticker;
    newContainer.querySelector(".info .market-cap #BTC-market-cap").textContent = formatMarketCap(marketCap);
    newContainer.querySelector(".info .price #BTC-price").textContent = price;
  
    btcContainer.parentNode.appendChild(newContainer);
  }
  
  
  // Format the market cap value
  function formatMarketCap(marketCap) {
    const marketCapValue = Number(marketCap);
    if (marketCapValue >= 1000000000) {
      return (marketCapValue / 1000000000).toFixed(2) + "B";
    } else if (marketCapValue >= 1000000) {
      return (marketCapValue / 1000000).toFixed(2) + "M";
    } else {
      return marketCapValue.toString();
    }
  }

  function ShowCoins(Setting) {
    const duration = 1000; // Transition duration in milliseconds
  
    if (Setting) {
      Opener.style.opacity = '0';
      Opener.style.visibility = 'hidden';
  
      App.style.display = '';
      App.style.opacity = '0';
      App.style.visibility = 'visible';
  
      setTimeout(function() {
        App.style.opacity = '1';
      }, 0);
    } else {
      App.style.opacity = '0';
      App.style.visibility = 'hidden';
  
      Opener.style.display = '';
      Opener.style.opacity = '1';
      Opener.style.visibility = 'visible';
  
      setTimeout(function() {
        App.style.display = 'none';
      }, duration);
    }
  }