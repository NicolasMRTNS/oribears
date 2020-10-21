let tableRow = document.createElement("tr");
let tableCol = document.createElement("td");

// document.getElementById(
//   "cart-display"
// ).innerHTML = `<tr> <td> ${localStorage.getItem(
//   "name"
// )} </td> <td id="price"> ${localStorage.getItem(
//   "price"
// )}</td><td>${localStorage.getItem(
//   "cartID"
// )} </td> <td class="text-center"><select id="quantity" required><option> </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> </td></tr>`;

// let e = document.getElementById("quantity");
// let price = localStorage.getItem("price").match(/[0-9]+/g);
// e.onchange = function () {
//   document.getElementById("total-price").innerHTML = `${
//     price * e.options[e.selectedIndex].value
//   }€`;
// };

function sortCart() {
  let test = localStorage.getItem("cartID");
  let test2 = test.split(",");
  let i = 0;
  while (i < test2.length) {
    let idDisplay = document.createElement("td");
    idDisplay.innerHTML = test2[i];
    fetchAPI
      .then((response) => {
        let j = 0;
        while (j < response.length) {
          if (response[j]._id === test2[i]) {
            rowName.innerHTML = response[j].name;
            console.log("salut");
          }
          j++;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(rowName);
    let rowDisplay = document.createElement("tr");
    rowDisplay.innerHTML = idDisplay.outerHTML + rowName.outerHTML;
    document.getElementById("cart-display").appendChild(rowDisplay);
    console.log(test2[i]);
    i++;
  }
}
sortCart();
