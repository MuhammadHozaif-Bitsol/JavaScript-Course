let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let player = {
  name: "hozaif",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":" + " $" + player.chips;
function startGame() {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    sum = sum + card;
    cards.push(card);
    renderGame();
  }
}
function getRandomNumber() {
  let newCard = Math.floor(Math.random() * 13 + 1);
  if (newCard === 1) {
    return 11;
  } else if (newCard === 11 || newCard === 12 || newCard === 13) {
    return 10;
  } else {
    return newCard;
  }
}
