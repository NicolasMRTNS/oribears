// Encrage du HTML
let products = document.getElementById("products");
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
      let productPicture = document.createElement("img");
      productPicture.src = response[i].imageUrl;
      productPicture.classList.add(...imgClass);
      // Création d'un H3 pour le nom du produit
      let productName = document.createElement("h3");
      productName.innerHTML = response[i].name;
      // Création d'un paragraphe pour y afficher le prix
      let productPrice = document.createElement("p");
      productPrice.innerHTML = `Prix : ${response[i].price / 100}€`;
      // Création d'un deuxième paragraphe pour y afficher la description
      let productDescription = document.createElement("p");
      productDescription.innerHTML = response[i].description;
      // Création du bouton pour la page produit
      let productBtn = document.createElement("button");
      productBtn.innerHTML = "Voir la page produit";
      productBtn.classList.add(...btnClass);
      // Tout cela va dans un article
      let newArticle = document.createElement("article");
      newArticle.innerHTML =
        productPicture.outerHTML +
        productName.outerHTML +
        productPrice.outerHTML +
        productDescription.outerHTML +
        productBtn.outerHTML;
      newArticle.classList.add(articleClass);
      // On ajoute cette article à notre encrage du HTML
      products.appendChild(newArticle);
      // On incrémente i pour éviter une boucle infinie
      i++;
    }
  });
