function updatePrices() {
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
      document.getElementById("bitcoin").textContent = "$" + data.bitcoin.usd;
      document.getElementById("ethereum").textContent = "$" + data.ethereum.usd;
      document.getElementById("dogecoin").textContent = "$" + data.dogecoin.usd;
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des prix :", error);
    });
}

// Premier appel au chargement de la page
updatePrices();

// Mise à jour automatique toutes les 10 secondes (10000 ms)
setInterval(updatePrices, 10000);
