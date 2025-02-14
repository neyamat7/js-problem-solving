// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// console.log(celsiusToFahrenheit(30));

//task-2
// You are given an array of numbers. Count how many times a number is repeated in the array.

// const numArray = [5, 6, 11, 12, 98, 5];

// function countNumber(numbers, findNumber) {
//   let count = 0;
//   for (const num of numbers) {
//     num === findNumber && count++;
//   }
//   return count;
// }

// console.log(countNumber(numArray, 5));

//task-3
// Write a function to count the number of vowels in a string.

// need to solve this problem
// let str = "aeiou aeiouaeiou fdfofdk ";
// str = str.toLowerCase();

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (const letter of str) {
//     let letterIndex = vowels.indexOf(letter);
//     console.log(letterIndex);
//     if (letterIndex !== -1) {
//       vowels.splice(letterIndex, 1);
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels(str));

//task -4
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

// const str = "I am learning Programming to become a programmer";

// function longestWord(str) {
//   let prevWordLength = 0;
//   let longestWord = "";
//   for (const word of str.split(" ")) {
//     if (word.length > prevWordLength) {
//       console.log(word);
//       longestWord = word;
//       prevWordLength = word.length;
//     }
//   }
//   return longWord;
// }

// console.log(longestWord(str));

// task-5
// Generate a random number between 10 to 20.

// function generateNumber(minValue, maxValue) {
//   // range = maxValue - minValue + 1
//   const randomNumber =
//     Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
//   return randomNumber;
// }

// console.log(generateNumber(10, 20));
