/ Отримати посилання на елементи const input = document.getElementById('amount');
const createBtn = document.getElementById('create');
const destroyBtn = document.getElementById('destroy');
const boxesContainer = document.getElementById('boxes');
// Функція для створення випадкового кольору 
function getRandomHexColor()
{ return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; }
// Функція для створення колекції елементів
function createBoxes(amount) { destroyBoxes();
  // Очищення попередніх елементів 
  const boxSize = 30;
  // Початковий розмір першого елемента
  for (let i = 0; i < amount; i++)
  {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; boxesContainer.appendChild(box);
  }
} // Функція для очищення колекції елементів 
function destroyBoxes() { boxesContainer.innerHTML = ''; }
// Обробка події натискання кнопки "Create" 
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100)
  { createBoxes(amount); input.value = '';
    // Очищення значення в інпуті 
  } else { alert('Please enter a number between 1 and 100'); }
}); // Обробка події натискання кнопки "Destroy" 
destroyBtn.addEventListener('click', () => { destroyBoxes(); });