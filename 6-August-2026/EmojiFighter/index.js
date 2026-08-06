let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let randomEmoji1 = Math.floor(Math.random() * 17);
  let randomEmoji2 = Math.floor(Math.random() * 17);
  stageEl.textContent =
    fighters[randomEmoji1] + " vs " + fighters[randomEmoji2];
});
