let dishName;
let drinkName;
let dessertName;

let dishPrice;
let drinkPrice;
let dessertPrice;

let total;

function convertDishPrice(dishPrice) {
  dishPrice = dishPrice.replace("R$", "").replace(",", ".");
  dishPrice = Number(dishPrice);
  return dishPrice;
}

function convertDrinkPrice(drinkPrice) {
  drinkPrice = drinkPrice.replace("R$", "").replace(",", ".");
  drinkPrice = Number(drinkPrice);
  return drinkPrice;
}

function convertDessertPrice(dessertPrice) {
  dessertPrice = dessertPrice.replace("R$", "").replace(",", ".");
  dessertPrice = Number(dessertPrice);
  return dessertPrice;
}

function selectDish(element) {
  let selectedFood = document.querySelector(".dish-container .selected");
  if (selectedFood !== null) {
    selectedFood.classList.remove("selected");
  }
  element.classList.add("selected");
  dishName = document.querySelector(".dish-name").innerHTML;
  dishPrice = document.querySelector(".dish-price").innerHTML;
  dishPrice = convertDishPrice(dishPrice);

  closeOrder();
}
function selectDrink(element) {
  let selectedFood = document.querySelector(".drink-container .selected");
  if (selectedFood !== null) {
    selectedFood.classList.remove("selected");
  }
  element.classList.add("selected");
  drinkName = document.querySelector(".drink-name").innerHTML;
  drinkPrice = document.querySelector(".drink-price").innerHTML;
  drinkPrice = convertDrinkPrice(drinkPrice);

  closeOrder();
}
function selectDessert(element) {
  let selectedFood = document.querySelector(".dessert-container .selected");
  if (selectedFood !== null) {
    selectedFood.classList.remove("selected");
  }
  element.classList.add("selected");
  dessertName = document.querySelector(".dessert-name").innerHTML;
  dessertPrice = document.querySelector(".dessert-price").innerHTML;
  dessertPrice = convertDessertPrice(dessertPrice);

  closeOrder();
}
function closeOrder() {
  if (
    (document.querySelector(".dish-container .selected") &&
      document.querySelector(".drink-container .selected") &&
      document.querySelector(".dessert-container .selected")) !== null
  ) {
    let closeOrderButton = document.querySelector(".select-items");
    closeOrderButton.classList.add("close-order-button");
    closeOrderButton.innerHTML = "Fechar pedido";
  }
}
function seeOrder() {
  if (document.querySelector(".close-order-button") !== null) {
    let confirmOrderOverlay = document.querySelector(".overlay");
    confirmOrderOverlay.classList.remove("display-none");

    total = dishPrice + drinkPrice + dessertPrice;

    confirmOrderOverlay.querySelector(
      ".dish-order .dish-order-name"
    ).innerHTML = dishName;
    confirmOrderOverlay.querySelector(
      ".dish-order .dish-order-price"
    ).innerHTML = `R$ ${dishPrice.toFixed(2)}`;

    confirmOrderOverlay.querySelector(
      ".drink-order .drink-order-name"
    ).innerHTML = drinkName;
    confirmOrderOverlay.querySelector(
      ".drink-order .drink-order-price"
    ).innerHTML = `R$ ${drinkPrice.toFixed(2)}`;

    confirmOrderOverlay.querySelector(
      ".dessert-order .dessert-order-name"
    ).innerHTML = dessertName;
    confirmOrderOverlay.querySelector(
      ".dessert-order .dessert-order-price"
    ).innerHTML = `R$ ${dessertPrice.toFixed(2)}`;

    confirmOrderOverlay.querySelector(
      ".order-price .total-order-price"
    ).innerHTML = `R$ ${total.toFixed(2)}`;
  }
}
function confirmOrder() {
  let name = prompt("Qual é o seu nome?");
  let adress = prompt("Qual é o seu endereço?");

  let mensagem = encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n- Prato: ${dishName}\n- Bebida: ${drinkName}\n- Sobremesa: ${dessertName}\nTotal: R$ ${total.toFixed(
      2
    )} \n\n Nome: ${name} \n Endereço: ${adress}`
  );
  let link = "https://wa.me/5511983027205?text=" + mensagem;
  window.open(link);
}
function cancelOrder() {
  let confirmOrderOverlay = document.querySelector(".overlay");
  confirmOrderOverlay.classList.add("display-none");
}
