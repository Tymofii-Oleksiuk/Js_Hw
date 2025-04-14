const arr = [1, 2, 3];
arr[2] = 15;

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
        console.log(strings[i])
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