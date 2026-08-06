//built a function that returns a random number from 1 to 6
function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}
let diceValue = rollDice();
console.log(diceValue);
