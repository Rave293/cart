const list = document.querySelectorAll(".list-products  .card-body .card");
const products = document.querySelector(".list-products");
const unit_prices = document.querySelectorAll(".card .unit-price");
const quantities = document.querySelectorAll(".card .quantity");
const add = document.querySelectorAll(".fas.fa-plus-circle");
const minus = document.querySelectorAll(".fas.fa-minus-circle");
const hearts = document.querySelectorAll(".fas.fa-heart");
const trash = document.querySelectorAll(".fas.fa-trash-alt");

console.log(unit_prices.length);

function addClickHeartEvent() {
  console.log(hearts.length);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", () => {
      if (hearts[i].classList.contains("text-danger")) {
        hearts[i].classList.remove("text-danger");
      } else {
        hearts[i].classList.add("text-danger");
      }
    });
  }
}

function addEventListener() {
  for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", () => {
      // console.log("adding");
      var qty = parseInt(quantities[i].innerHTML);
      // console.log(qty);
      qty += 1;
      // console.log(qty);
      quantities[i].innerHTML = qty;
      getTotal();
    });
  }
}
function minusEventListener() {
  for (let i = 0; i < add.length; i++) {
    minus[i].addEventListener("click", () => {
      // console.log("adding");
      var qty = parseInt(quantities[i].innerHTML);
      console.log(qty);
      if (qty > 0) {
        qty -= 1;
      }
      console.log(qty);
      quantities[i].innerHTML = qty;
      getTotal();
    });
  }
}

function addDeleteEvent() {
  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", () => {
      console.log("delete");
      products.removeChild(products.children[i]);
      getTotal();
    });
  }
}

function getTotal() {
  const prices = document.querySelectorAll(".card .unit-price");
  const quant = document.querySelectorAll(".card .quantity");
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    console.log(prices[i].innerHTML.split(" ")[0]);
    console.log(quant[i].innerHTML);
    sum +=
      parseFloat(prices[i].innerHTML.split(" ")[0]) *
      parseFloat(quant[i].innerHTML);
  }
  document.getElementById("total").innerHTML = `${sum} $`;
}

getTotal();
addClickHeartEvent();
addEventListener();
minusEventListener();
addDeleteEvent();