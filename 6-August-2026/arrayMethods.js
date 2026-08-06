let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.push("Pakistan");
console.log(largeCountries);
largeCountries.pop();
console.log(largeCountries);
largeCountries.shift();
console.log(largeCountries);
largeCountries.unshift("England", "Australia");
console.log(largeCountries);
//function to pick a random hand from the rock papers scissors array
let hands = ["rock", "paper", "scissors"];
function pickRandomHand() {
  let random = Math.floor(Math.random() * 3);
  return hands[random];
}
console.log(pickRandomHand());
