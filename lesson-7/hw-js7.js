const arr = [1, 2, 3];
arr[2] = 10;

const arr1 = ["My", "name", "is"];
arr1[3] = "Tymofii";

let sum = 0;
for (const number of arr) {
  sum += number;
}
console.log(sum);

for (const i of arr) {
  console.log(i);
}

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const strings = ["Hello", "World", "I", "am", "Tymofii"];

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > 5) {
    console.log(strings[i]);
  }
}

const numbers1 = [5, 12, 8, 21, 7, 18, 3, 14, 25, 10];

let max = 0;

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > max) {
    max = numbers1[i];
  }
}
console.log(max);

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    console.log(numbers1[i]);
  }
}

//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? 1-1.Створити змінну <array> значення якої
//? є масив із п'яти елементів,
//? де упереміш присутні числа та рядки.
//? Вивести в консоль значення змінної <array>.
//? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
console.log("%c [1-1] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання
const array = [42, "Hello", 7, "World", 15];

console.log(array);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("-------------------------------------------");

//? 1-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 і вивести їх значення в консоль.
//? Вивести в консоль значення змінної(масиву) <array>.
console.log("%c [1-2] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання
array[0] += 1;
array[1] += 1;
console.log(array);
console.log("-------------------------------------------");

//? 1-3.Виміряти довжину масиву [array]
//? та вивести це значення в консоль.
console.log("%c [1-3] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання
console.log(array.length);

console.log("-------------------------------------------");

//? 1-4.Отримати индекс та значення
//? останнього елемента масиву <array>.
//? Вивести ці значення в консоль.
console.log("%c [1-4] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

const lastIndex = array.length - 1; // Індекс останнього елемента
const lastValue = array[lastIndex]; // Значення останнього елемента

console.log(`Індекс останнього елемента: ${lastIndex}`);
console.log(`Значення останнього елемента: ${lastValue}`);
console.log("-------------------------------------------");

//? 2-1.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for.
console.log("%c [2-1] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("-------------------------------------------");

//? 2-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 за допомогою цикла for
//? і вивести їх значення в консоль.
//? Вивести в консоль значення масиву [array].
console.log("%c [2-2] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
  if (i === 1 || i === 2) {
    console.log(`Елемент ${i + 1}: ${array[i]}`);
  }
}

console.log(array);

console.log("-------------------------------------------");

//? 2-3.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for...of.
console.log("%c [2-3] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (const element of array) {
  console.log(element);
}

console.log("-------------------------------------------");

//? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log("%c [2-4] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (const element of array) {
  if (typeof element === "number") {
    console.log(`Перше числове значення: ${element}`);
    break;
  }
}

console.log("-------------------------------------------");

//? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log("%c [2-5] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (const element of array) {
  if (typeof element === "string") {
    console.log(`Перше рядкове значення: ${element}`);
    break;
  }
}

console.log("-------------------------------------------");

//? 2-6.Знайти ВСІ ЧИСЛОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log("%c [2-6] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (const element of array) {
  if (typeof element !== "number") {
    continue;
  }
  console.log(element);
}

console.log("-------------------------------------------");

//? 2-7.Знайти ВСІ РЯДКОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log("%c [2-7] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (const element of array) {
  if (typeof element !== "string") {
    continue;
  }
  console.log(element);
}

console.log("-------------------------------------------");

//? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for...of,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log("%c [2-8] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "number") {
    continue;
  }
  array[i] = array[i] + 1;
}

console.log(array);

console.log("-------------------------------------------");

//? 2-9.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log("%c [2-9] ", "color: #2274A5; background-color: yellow");
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    continue;
  }
  array[i] = array[i] + 1;
}

console.log(array);

console.log("-----------------------------------------------------");
