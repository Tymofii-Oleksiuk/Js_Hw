//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? 🔸 Створити галерею зображень, яку можна прогортати
//? за допомогою клавіш клавіатури (наприклад, вліво / вправо)
//? ✴️ В HTML є такі елементи:
//! Код виконаного завдання

const images = Array.from(document.querySelectorAll(".gallery .image"));
let currentIndex = 3;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(currentIndex);
  }
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1) % images.length;
    images[currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(currentIndex);
  }
});

console.log("--------------------------------------------------");

//todo [2]
console.log("%c [2] ", "color: yellow; background-color: #2274A5");
//? 🔸 Напиши скрипт створення і очищення колекції елементів.
//? Користувач вводить кількість елементів в input
//? і натискає кнопку Створити, після чого рендериться колекція.
//? При натисканні на кнопку Очистити, колекція елементів очищається.
//? 🔸 Створи функцію createBoxes(amount),
//? яка приймає 1 параметр amount - число.
//? Функція створює стільки div,
//? скільки вказано в amount і додає їх в div#boxes.
//? 🔸 Кожен створений div:
//? - Має випадковий rgb колір фону
//? - Розміри найпершого div — 30px на 30px
//? - Кожен наступний div після першого,
//?   повинен бути ширше і вище попереднього на 10px
//? 🔸 Створи функцію destroyBoxes(), яка очищає div#boxes.
//? ✴️ В HTML є такі елементи:
/*
<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Створити</button>
    <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
*/
//! Код виконаного завдання

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const renderBtn = controls.querySelector('button[data-action="render"]');
const destroyBtn = controls.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    div.style.margin = "5px";
    elements.push(div);
    size += 10;
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
  destroyBoxes();
  const amount = Number(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

console.log("--------------------------------------------------");
