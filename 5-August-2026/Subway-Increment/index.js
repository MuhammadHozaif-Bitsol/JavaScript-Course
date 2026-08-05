let count = 0;
let paraEl = document.getElementById("save");
let saveEntry;
console.log(typeof count);
//increment the value of count by one
function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function save() {
  saveEntry = count + " - ";
  paraEl.innerText += saveEntry;
}
