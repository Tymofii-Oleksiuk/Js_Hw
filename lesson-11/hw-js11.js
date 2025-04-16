//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання

const bankAccount = {
  ownerName: "Tymofii",
  accountNumber: "743215643",
  balance: 100,

  adDepost() {
    const replenishmentAccount = prompt(
      "Щоб поповнити рахунок, ведіть суму для поповнення"
    );
    bankAccount.balance = bankAccount.balance + Number(replenishmentAccount);
    return alert(`Ваш баланс ${bankAccount.balance} грн`);
  },
  withdraw() {
    const withdrawBalance = prompt("Щоб зняти гроші, ведіть суму");
    bankAccount.balance = bankAccount.balance - Number(withdrawBalance);
    return alert(`Ваш баланс ${bankAccount.balance} грн`);
  },
};

console.log(bankAccount.adDepost());

console.log(bankAccount.withdraw());

console.log("--------------------------------------------------");

//todo [2]
console.log("%c [2] ", "color: yellow; background-color: #2274A5");
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання

const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,

  measurementTemperature() {
    const input = prompt("Ведіть температуру");
    weather.temperature = input;
    if (weather.temperature > 0) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(weather.measurementTemperature());

console.log("--------------------------------------------------");

//todo [3]
console.log("%c [3] ", "color: yellow; background-color: #2274A5");
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання
const user = {
  name: "",
  email: "",
  password: "",
  login() {
    const userName = prompt("Щоб зареєструватися ведіть своє ім'я");
    user.name = userName;
    const emailChek = prompt("Ведіть свою почту");
    user.email = emailChek;
    const passwordChek = prompt("Ведіть пароль від почти");
    user.password = passwordChek;
    console.log(user.email);
    console.log(user.password);
    return user.name;
  },
};

console.log(user.login());

console.log("--------------------------------------------------");

//todo [4]
console.log("%c [4] ", "color: yellow; background-color: #2274A5");
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

const movie = {
  title: "",
  director: 0,
  year: 0,
  rating: 8,

  movieRating(star) {
    if (star >= 8) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(movie.movieRating(movie.rating));

console.log("--------------------------------------------------");
