let productPage = document.getElementById("productsPage");
let storedProduct = localStorage.getItem("id");
let productPicture = document.createElement("img");
let productName = document.createElement("h3");
let productPrice = document.createElement("p");
let productDescription = document.createElement("p");
let dropdownList = document.createElement("select");

const imgClass = ["img-fluid", "mx-auto", "mt-3", "align-self-center"];
const articleClass = ["mb-3"];

fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    let i = 0;
    while (i < response.length) {
      if (response[i]._id === storedProduct) {
        productPicture.src = response[i].imageUrl;
        productPicture.classList.add(...imgClass);
        productName.innerHTML = response[i].name;
        productPrice.innerHTML = `Prix : ${response[i].price / 100}€`;
        productDescription.innerHTML = response[i].description;
        for (let j = 0; j < response[i].colors.length; j++) {
          let option = document.createElement("option");
          option.value = response[i].colors[j];
          option.innerHTML = response[i].colors[j];
          dropdownList.appendChild(option);
        }
        let articleProduct = document.createElement("article");
        articleProduct.innerHTML =
          productPicture.outerHTML +
          productName.outerHTML +
          productPrice.outerHTML +
          productDescription.outerHTML +
          dropdownList.outerHTML;
        articleProduct.classList.add(...articleClass);
        productPage.appendChild(articleProduct);
      }
      i++;
    }
  });
