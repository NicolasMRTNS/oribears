// Encrage du HTML
let products = document.getElementById("products");
let productPage = document.getElementById("productsPage");
// Création des éléments HTML
let storedProduct = localStorage.getItem("id");
let productPicture = document.createElement("img");
let productName = document.createElement("h3");
let productPrice = document.createElement("p");
let productDescription = document.createElement("p");
let productLink = document.createElement("a");
let dropdownList = document.createElement("select");
let productsInCart = [];

// Class Bootstrap des éléments
const imgClass1 = ["img-fluid", "mx-auto", "mt-3", "align-self-center"];
const articleClass = ["mb-3"];
const imgClass = ["img-fluid", "mx-auto"];
const btnClass = ["btn", "btn-secondary"];

function cart() {
  let productArray = Array(
    localStorage.getItem("id"),
    localStorage.getItem("name"),
    localStorage.getItem("price")
  );
  productsInCart.push(...productArray);
  localStorage.setItem("product", productsInCart);
  localStorage.removeItem("id");
  localStorage.removeItem("name");
  localStorage.removeItem("price");
  console.log(productArray);
  console.log(productsInCart);
}
