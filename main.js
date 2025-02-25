// Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of this string.
// If cannot find the string return -1.

// Example 1:
// Input: [ “hello”, “blue”, ”green” ] , "blue"
// Output: 1

// Example 2:
// Input: [ “hello”, “blue”, ”green” ] , “red”
// Output: -1

// Constraints:
// Array length cannot be zero or negative.

// function findIndex(arr, str) {
//   if (!Array.isArray(arr) || !arr.length > 0 || typeof str !== "string") {
//     return "invalid";
//   }
//   for (const strElement of arr) {
//     if (typeof strElement !== "string") {
//       return "invalid";
//     }
//   }

//   if (arr.indexOf(str) || arr.indexOf(str) === 0) {
//     return arr.indexOf(str);
//   } else {
//     return -1;
//   }
// }

// console.log(findIndex(["hello", "red", "blue", "green"], "blue"));
// console.log(findIndex(["hello", "blue", "green"], "red"));

//*************************** */
// function findIndex(arr, str) {
//   if (!Array.isArray(arr) || !arr.length > 0 || typeof str !== "string") {
//     return "invalid";
//   }

// return arr.indexOf(str);
// }

//********************** *
function findIndex(arr, str) {
  if (!Array.isArray(arr) || !arr.length > 0 || typeof str !== "string") {
    return "invalid";
  }
  for (const strElement of arr) {
    if (typeof strElement !== "string") {
      return "invalid";
    }
  }

  let foundIndex = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      if (foundIndex.length > 0) {
        foundIndex += `, ${i}`;
      } else {
        foundIndex += i;
      }
    }
  }
  if (foundIndex.length > 0) {
    if (foundIndex.length === 1) {
      return parseInt(foundIndex);
    }
    return foundIndex;
  } else {
    return -1;
  }
}

console.log(findIndex(["hello", "red", "blue", "green"], "blue"));
console.log(findIndex(["hello", "red", "blue", "green"], "red"));
console.log(findIndex(["hello", "red", "blue", "green"], 98));
console.log(findIndex(["hello", "red", 565, "green"], "hello"));
