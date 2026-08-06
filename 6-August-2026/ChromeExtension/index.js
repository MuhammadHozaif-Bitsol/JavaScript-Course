let myleads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const buttonEl = document.getElementById("input-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));

buttonEl.addEventListener("click", function () {
  myleads.push(inputEl.value);
  localStorage.setItem("myleads", JSON.stringify(myleads));
  renderLeads();
  inputEl.value = "";
  console.log(localStorage.getItem("myleads"));
});
if (leadsFromLocalStorage) {
  myleads = leadsFromLocalStorage;
  renderLeads();
}
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    listItems += `<li>  <a target=_blank href="${myleads[i]}"> ${myleads[i]}  </a> </li> `;
  }
  ulEl.innerHTML = listItems;
}
