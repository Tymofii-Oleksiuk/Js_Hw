//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? Створити розмітку з кнопкою та текстовим полем.
//? За допомогою JavaScript отримати доступ до кнопки
//? та текстового поля за їх ідентифікаторами
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання
const button = document.querySelector(".btn");
const text = document.querySelector(".text");

button.textContent = text.value;

console.log("--------------------------------------------------");

//todo [2]
console.log("%c [2] ", "color: yellow; background-color: #2274A5");
//? Створити розмітку з заголовком та зображенням.
//? За допомогою JavaScript отримати доступ до зображення
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання
const img = document.querySelector(".img");
const newImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPs5F52b2VLBS-sGYQUoOFDQadsttLQ3s6Xg&s";
img.src = newImage;

console.log("--------------------------------------------------");

//todo [3]
console.log("%c [3] ", "color: yellow; background-color: #2274A5");
//? Створити розмітку  з посиланням та зображенням.
//? За допомогою JavaScript отримати доступ до посилання
//? та змінити значення атрибута "href" на нову URL-адресу.
//? Також отримати доступ до зображення
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання

const link = document.querySelector(".link");
const img1 = document.querySelector(".img2");

const newUrl =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stern.de%2Fauto%2Fnews%2Fgerman-car-of-the-year-2019---deutschlands-experten-waehlen-das-beste-auto-des-jahres-8424920.html&psig=AOvVaw2o4q5Q6RngelvY7PhWAQPH&ust=1748962009224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKibzM790o0DFQAAAAAdAAAAABAE";
link.href = newUrl;

img1.alt = "Це зображення автомобіля";
console.log("--------------------------------------------------");

//todo [4]
console.log("%c [4] ", "color: yellow; background-color: #2274A5");
//? Створити розмітку  зі списком елементів.
//? За допомогою JavaScript отримати доступ
//? до першого елемента списку
//? та змінити його вміст на новий текст.
//! Код виконаного завдання

const list = document.querySelector(".list");
const firstItem = list.firstElementChild;
firstItem.textContent = "Новий текст для першого елемента списку";

console.log("--------------------------------------------------");
