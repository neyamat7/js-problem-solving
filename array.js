// js array task;

// //1
// const arr = ["banana", "grape", "mango", "apple", "orange"];
// console.log(arr[2]);
// arr[1] = "jambura";

// console.log(arr);

// //2
// const destination = ["Shitakundo", "Monpura", "Saint-Martins"];
// destination.push("Nijhum Dip");
// destination.push("Chandpur Trimohona", "Bandarban");
// destination.pop();
// console.log(destination);

// //3
// const books = ["cpp", "c#", "javascript", "python"];
// if (books.includes("javascript")) {
//   console.log(`Javascript books is present in the books array`);
// }

// //4
// const fruitsArray = ["banana", "grape"];
// const booksName = "javascipt, python";
// const isStudent = false;
// console.log(Array.isArray(fruitsArray));
// console.log(Array.isArray(booksName));
// console.log(Array.isArray(isStudent));

// //5
// const proggramingBooks = ["cpp", "c#", "javascript", "python"];
// const nicePlacesName = ["Shitakundo", "Monpura", "Saint-Martins"];
// const concatedArrays = proggramingBooks.concat(nicePlacesName);

// console.log(`Original Array: ${proggramingBooks} and ${nicePlacesName}`);
// console.log(`concated Array: ${concatedArrays}`);

// // Write a JavaScript code to reverse the array colors without using the reverse method.
// let colors = ["red", "blue", "green", "yellow", "orange"];

// console.log(colors);

// let reversedArray = [];
// for (let color of colors) {
//   reversedArray.unshift(color);
// }
// colors = reversedArray;

// console.log(colors);

//Write a JavaScript code to get the even numbers from an array using any looping technique.
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// let evenNumbers = [];

// for (num of numbers) {
//   if (num % 2 === 0) {
//     evenNumbers.push(num);
//   }
// }

// console.log(evenNumbers);

//*****************
// Use a for...of loop to concatenate all the elements of an array into a single string.
// let words = ["Tom", "Tim", "Tin", "Tik"];
// let concatenateString = "";

// for (const str of words) {
//   concatenateString += str;
// }

// console.log(concatenateString);

//*****************
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// let statement = "I am a hard working person";

// let reversedStr = [];

// for (const word of statement.split(" ")) {
//   reversedStr.unshift(word);
// }
// statement = reversedStr.join(" ");

// console.log(statement);
