// const input = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes() {
//   let html = "";
//   let size = 30;

//   let currentWidth = parseInt(createBoxes(boxesContainer).width);
//   let currentHeight = parseInt(createBoxes(boxesContainer).height);
//   console.log(currentHeight);

//   increase.addEventListener("click", () => {
//     if (currentWidth >= 60 || currentHeight >= 60) {
//       alert("Перестань клацати!!!!");
//       return;
//     }
//     currentWidth += 10;
//     currentHeight += 10;
//     createBoxes.style.width = currentWidth + "px";
//     createBoxes.style.height = currentHeight + "px";
//     createBoxes.style.color = getRandomHexColor();
//   });

//   boxesContainer.innerHTML = html;

//   input.value = "";
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let html = "";
  let size = 30;

  // Отримуємо кількість елементів для створення
  const amount = parseInt(input.value);

  // Перевіряємо валідність введеного значення
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Будь ласка, введіть число від 1 до 100.");
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
