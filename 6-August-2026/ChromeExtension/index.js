let myleads = ["awesomelead.com"];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const buttonEl = document.getElementById("input-btn");
buttonEl.addEventListener("click", function () {
  myleads.push(inputEl.value);
  renderLeads();
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    listItems += "<li>" + myleads[i] + "</li> ";
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
