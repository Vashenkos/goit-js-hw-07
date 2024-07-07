const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let html = "";
  let size = 30;
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  for (let i = 0; i < amount; i++) {
    html += `<div style="width: ${size}px;
     height: ${size}px;
    background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = html;

  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
