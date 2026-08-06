let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
const cards = [firstCard, secondCard];
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
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "SUM: " + sum;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
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
  let card = getRandomNumber();
  sum = sum + card;
  cards.push(card);
  renderGame();
}
function getRandomNumber() {
  return Math.floor(Math.random() * 13 + 1);
}
