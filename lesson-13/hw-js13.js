//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
//! Код виконаного завдання
const { name, age, hobby, premium } = userA;
console.log(name, age, hobby, premium);
console.log("--------------------------------------------------");

//todo [2]
console.log("%c [2] ", "color: yellow; background-color: #2274A5");
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: "Mango", age: 2 };
//! Код виконаного завдання
const { name: nameB, age: ageB } = userB;
console.log(nameB, ageB);

console.log("--------------------------------------------------");

//todo [3]
console.log("%c [3] ", "color: yellow; background-color: #2274A5");
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
  count: 11,
  employeePerformanceLists: [
    {
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    },
    {
      poly: 12,
      mango: 17,
      ajax: 4,
    },
    {
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    },
  ],
};
//! Код виконаного завдання
const {
  count,
  employeePerformanceLists: [
    { ann, david, helen, lorence },
    { poly, mango, ajax },
    { lux, david: davidA, kiwi, chelsy },
  ],
} = employeePerformance;

console.log(
  count,
  ann,
  david,
  helen,
  lorence,
  poly,
  mango,
  ajax,
  lux,
  davidA,
  kiwi,
  chelsy
);
console.log("--------------------------------------------------");

//todo [4]
console.log("%c [4] ", "color: yellow; background-color: #2274A5");
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
  count: 6,
  employeeSalaryLists: [
    {
      mango: 100,
      poly: 150,
      alfred: 80,
    },
    {
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    },
  ],
};
//! Код виконаного завдання
const {
  countA,
  employeeSalaryLists: [
    { mango: mangoA, poly: polyA, alfred: alfredA },
    { kiwi: kiwiA, lux: luxA, chelsy: chelsyA },
  ],
} = employeeSalaries;
console.log(count, mangoA, polyA, alfredA, kiwiA, luxA, chelsyA);
console.log("--------------------------------------------------");

//todo [5]
console.log("%c [5] ", "color: yellow; background-color: #2274A5");
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
  {
    name: "Радар",
    price: 1300,
    quantity: 4,
  },
  {
    name: "Сканер",
    price: 2700,
    quantity: 3,
  },
  {
    name: "Дроїд",
    price: 400,
    quantity: 7,
  },
  {
    name: "Захоплення",
    price: 1200,
    quantity: 2,
  },
];
//! Код виконаного завдання
const [
  { name: nameProductA, price: priceProductA, quantity: quantityProductA },
  { name: nameProductB, price: priceProductB, quantity: quantityProductB },
  { name: nameProductC, price: priceProductC, quantity: quantityProductC },
  { name: nameProductD, price: priceProductD, quantity: quantityProductD },
] = products;

console.log(nameProductA, priceProductA, quantityProductA);
console.log(nameProductB, priceProductB, quantityProductB);
console.log(nameProductC, priceProductC, quantityProductC);
console.log(nameProductD, priceProductD, quantityProductD);
console.log("--------------------------------------------------");