
const price_1 = document.getElementById('price_1');
const price_2 = document.getElementById('price_2');
const price_3 = document.getElementById('price_3');
const price_4 = document.getElementById('price_4');
const price_5 = document.getElementById('price_5');

const price1 = price_1.textContent;
const price2 = price_2.textContent;
const price3 = price_3.textContent;
const price4 = price_4.textContent;
const price5 = price_5.textContent;

function calcSum () {
    let sum = +price1 + +price2 + +price3 + +price4 + +price5;
    return sum;
}
const sum = calcSum ();
let amount = document.querySelector('#amount');
amount = sum;

function calcDiscount () {
  let discount = sum - ((sum*20)/100);
  return discount;
}

function newPrice () {
  let amount = document.querySelector('#amount');
  amount = calcDiscount ();
  return amount;
}

const btn = document.querySelector(".button")
btn.addEventListener("click", function(evt) {
  evt.preventDefault ();
  return newPrice ();
});

//btn.addEventListener("click", () => calcDiscount());
//console.log(newPrice());