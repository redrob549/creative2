document.getElementById("nameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("nameInput").value;
  if (value === "")
    return;
  //console.log(value);
  const cardName = value.replace(/ /g, "+");
  //console.log(cardName);
  apiurl = " https://api.scryfall.com/cards/named?fuzzy=" + cardName;
  console.log(apiurl);
  fetch(apiurl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      newImage = json.image_uris.normal;
      document.getElementById("cardImage").src = newImage;
      newPrice = "-";
      if (json.prices.usd != null) {
        newPrice = json.prices.usd;
      }
      document.getElementById("priceNumber").innerHTML = newPrice;
    });
});
