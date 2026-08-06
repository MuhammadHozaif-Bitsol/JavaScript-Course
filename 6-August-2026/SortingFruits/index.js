let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
function arrangeOnShelf() {
  for (let fruit of fruits) {
    if (fruit === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}
arrangeOnShelf();
