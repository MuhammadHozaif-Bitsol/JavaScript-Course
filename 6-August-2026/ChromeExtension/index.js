let myleads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const buttonEl = document.getElementById("input-btn");
buttonEl.addEventListener("click", function () {
  myleads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    listItems += `<li>  <a target=_blank href="${myleads[i]}"> ${myleads[i]}  </a> </li> `;
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
