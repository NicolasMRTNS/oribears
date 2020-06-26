// Encrage du HTML
let products = document.getElementById("products");
// Création des éléments HTML
let productPicture = document.createElement("img");
let productName = document.createElement("h3");
let productPrice = document.createElement("p");
let productDescription = document.createElement("p");
let productBtn = document.createElement("button");
let productLink = document.createElement("a");
// Class Bootstrap des éléments
const imgClass = ["img-fluid", "mx-auto"];
const btnClass = ["btn", "btn-secondary"];
const articleClass = ["mb-5"];

// Fetch à l'API
fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    // Boucle while pour afficher tous les produits
    let i = 0;
    while (i < response.length) {
      // Création d'une image et affichage de celle-ci
      productPicture.src = response[i].imageUrl;
      productPicture.classList.add(...imgClass);
      // Création d'un H3 pour le nom du produit
      productName.innerHTML = response[i].name;
      // Création d'un paragraphe pour y afficher le prix
      productPrice.innerHTML = `Prix : ${response[i].price / 100}€`;
      // Création d'un deuxième paragraphe pour y afficher la description
      productDescription.innerHTML = response[i].description;
      // Création du bouton pour la page produit et insertion de celui -ci à l'intérieur d'un lien
      productBtn.innerHTML = "Voir la page produit";
      productBtn.classList.add(...btnClass);
      productBtn.type = "button";
      productBtn.setAttribute("id", response[i]._id);
      productLink.href = "../html_pages/product.html";
      productLink.appendChild(productBtn);
      // Tout cela va dans un article
      let newArticle = document.createElement("article");
      newArticle.innerHTML =
        productPicture.outerHTML +
        productName.outerHTML +
        productPrice.outerHTML +
        productDescription.outerHTML +
        productLink.outerHTML;
      newArticle.classList.add(...articleClass);
      // On ajoute cette article à notre encrage du HTML
      products.appendChild(newArticle);
      // On incrémente i pour éviter une boucle infinie
      i++;
    }
  });

// Ajout de l'eventListener pour les boutons pour fabriquer la page produit
document.querySelector("#products").addEventListener("click", function (e) {
  if (e.target.id !== 0) {
    console.log(e.target.id);
    localStorage.setItem("id", e.target.id);
  }
});
productBtn.click();
