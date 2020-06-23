let products = document.getElementById("products");
let url = "http://localhost:3000/api/teddies";
const imgClass = ["img-fluid", "mx-auto"];
const btnClass = ["btn", "btn-secondary"];

// Fetch à l'API
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    let productPicture = document.createElement("img");
    productPicture.src = response[0].imageUrl;
    productPicture.classList.add(...imgClass);
    let productName = document.createElement("h3");
    productName.innerHTML = response[0].name;
    let productPrice = document.createElement("p");
    productPrice.innerHTML = `Prix : ${response[0].price / 100}€`;
    let productDescription = document.createElement("p");
    productDescription.innerHTML = response[0].description;
    let productBtn = document.createElement("button");
    productBtn.innerHTML = "Voir la page produit";
    productBtn.classList.add(...btnClass);
    let newArticle = document.createElement("article");
    newArticle.innerHTML =
      productPicture.outerHTML +
      productName.outerHTML +
      productPrice.outerHTML +
      productDescription.outerHTML +
      productBtn.outerHTML;
    products.appendChild(newArticle);
  });
