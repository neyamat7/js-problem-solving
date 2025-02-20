// Count how many times a string has the letter a

// const str = "Lo a Ave is like aaa aclapping, it takes two hands.";

// let a = 0;
// for (let i of str) {
//   if (i === "a") a++;
// }
// console.log(a);

//Count how many times a string has the letter a or A
// const str =
//   "Life is nota AAaA easy, nor is it complicated. Life is just like life. We Are the ones who mAke it complicated.";

// let a = 0;

// for (let i of str) {
//   //   if (i === "a" || i === "A") a += 1;
//   if (i.toLowerCase() === "a") a++;
// }

// console.log(a);

// const str =
//   "Life is a nota AAaA easy, nor is it complicated. Life is just like life. We Are the ones who mAke it complicated.";

// let count1 = 0;
// let count2 = 0;
// for (const char of str) {
//   //   char === "a" && count1++;
//   //   char === "A" && count2++;
//   if (char === "a") count1++;
//   if (char === "A") count2++;
// }
// console.log(count1);
// console.log(count2);

//Check whether a string contains all the vowels a, e, i, o, u

// let str =
//   "A quick brown fox jumps over the lazy dog, a simple exercise for all, yet quite educational, I found.";

// let vowels = ["a", "e", "i", "o", "u"];
// let strVowels = [];

// for (const i of str) {
//   let letter = i.toLowerCase();
//   if (
//     i.toLowerCase() === "a" ||
//     i.toLowerCase() === "e" ||
//     i.toLowerCase() === "i" ||
//     i.toLowerCase() === "o" ||
//     i.toLowerCase() === "u"
//   ) {
//     if (!strVowels.includes(letter)) {
//       strVowels.push(letter);
//     }
//   }
// }

// if (strVowels.length === 5) {
//   console.log("mathes: " + strVowels);
//   console.log("str contains all vowels");
// } else {
//   console.log("str does not contain all vowels. mathes only " + strVowels);
// }

// another way
// let str = "aeiou dhf fjdlf";
// str = str.toLowerCase();

// let vowels = ["a", "e", "i", "o", "u"];

// for (let i of str) {
//   let idx = vowels.indexOf(i);
//   console.log(idx);
//   if (idx !== -1) {
//     vowels.splice(idx, 1);
//   }
// }

// if (vowels.length === 0) {
//   console.log("str has all 5 vowels");
// } else {
//   console.log("str does not have all 5 vowels");
// }

// if (match.length === 5) {
//   console.log("mathes: " + match);
//   console.log("str contains all vowels");
// } else {
//   console.log("str does not contain all vowels. mathes only " + match);
// }

//best way
// const str = "A quick brown fox jumps over the lazy dog, a simple exercise for all, yet quite educational, I found.";
// const vowels = new Set(["a", "e", "i", "o", "u"]); // Use a Set for vowels
// const foundVowels = new Set(); // Use a Set to track found vowels

// for (const char of str.toLowerCase()) {  // Iterate directly over lowercase chars
//   if (vowels.has(char)) { // Efficient Set lookup
//     foundVowels.add(char);
//   }
// }

// if (foundVowels.size === vowels.size) { // Compare Set sizes directly
//   console.log("Matches:", Array.from(foundVowels)); // Convert Set to array for display
//   console.log("str contains all vowels");
// } else {
//   console.log("str does not contain all vowels. Matches only", Array.from(foundVowels));
// }

// // If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let str = "A Xylophone's xxxxxxxxx XXXXXX yellow yarn yielded xylitol.";
// const newStr = str.replaceAll("x", "y").replaceAll("X", "Y");
// console.log(newStr);

// another solution
// let newStr = [];

// for (let i of str) {
//   if (i === "x") {
//     newStr.push("y");
//   } else if (i === "X") {
//     newStr.push("Y");
//   } else {
//     newStr.push(i);
//   }
// }
// console.log(newStr.join(""));

// Capitalize Every first Letter of each word in a String
// let str = "a xylophone's yellow yarn yielded xylitol.";

// let capString = "";

// for (let char of str.split(" ")) {
//   let capStr = char.at(0).toUpperCase() + char.slice(1);
//   capString += capStr + " ";
// }
// console.log(capString.trim());

// another way to do so
// const capString = str
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ")
//   .trim();
// console.log(capString);
