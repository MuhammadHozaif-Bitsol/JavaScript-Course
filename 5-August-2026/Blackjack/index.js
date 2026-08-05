"use strict";
let firstCard = 8;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "wohoo. You got a blackjack";
    hasBlackJack = true;
  } else {
    message = "You Lose";
    isAlive = false;
  }
  console.log(message);
}
