let firstCard = 8;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
console.log(sumEl);
function startGame() {
  renderGame();
}
function renderGame() {
  sumEl.textContent = "SUM: " + sum;
  cardsEl.textContent = "CARDS: " + firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "wohoo. You got a blackjack";
    hasBlackJack = true;
  } else {
    message = "You Lose";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  let card = 3;
  sum = sum + card;
  renderGame();
}
