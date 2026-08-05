let count = 0;
console.log(typeof count);
//increment the value of count by one
function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
}
function save() {
  console.log(count);
}
