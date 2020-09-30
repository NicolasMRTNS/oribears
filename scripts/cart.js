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

let test = localStorage.getItem("cartID");
let test2 = test.split(",");
for (i in test2) {
  document.getElementById(
    "cart-display"
  ).innerHTML = `<tr><td> ${test2[i]} </td></tr>`;
  console.log(test2[i]);
}
