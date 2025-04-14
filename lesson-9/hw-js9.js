function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`); // Виводимо номер елемента та його значення
  }
}
logItems(["Mango", "Poly", "Ajax"]);

function calculateEngravingPrice(word, pricePerWord) {
  const letters = word.length;
  console.log(letters);
  const total = letters * pricePerWord;
  return `${total}$`;
}
console.log(calculateEngravingPrice("JavaScript is amazing", 10));

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("JavaScript is amazing"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return string.slice(0, 40) + "...";
}

console.log(formatString("JavaScript is amazing"));

function checkForSpam(message) {
  return message.includes("spam") || message.includes("sale");
}

console.log(checkForSpam("JavaScript weekly newsletter"));

let input;
let promptMessage = prompt("Ведіть число");
const numbers = promptMessage.split(" ");

if (promptMessage.length > 0) {
} else {
  alert("Будь ласка, введіть коректне число!");
}

if (numbers.length > 0) {
  let total;
  for (const number of numbers) {
    total += Number(number);
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив чисел порожній.");
}
console.log(numbers);
// console.log(`Загальна сума чисел дорівнює ${total}`);
