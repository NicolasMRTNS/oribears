fetchAPI.then((response) => {
  let i = 0;
  while (i < response.length) {
    if (response[i]._id === storedProduct) {
      productPicture.src = response[i].imageUrl;
      productPicture.classList.add(...imgClass1);
      productName.innerHTML = response[i].name;
      productPrice.innerHTML = `${response[i].price / 100}€`;
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

document.getElementById("addToCartBtn").addEventListener("click", function () {
  localStorage.setItem("name", productName.innerHTML);
  localStorage.setItem("price", productPrice.innerHTML);
  document.getElementById("addToCartBtn").innerHTML =
    "Article ajouté avec succés à votre panier";
  // cart();
});
