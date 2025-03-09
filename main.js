// Write a JavaScript function called removeDuplicate that takes an array as input and removes all duplicate elements while keeping the order of the first occurrences. The function should return a new array containing only unique elements.

// Example :
// Input : [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
// Output: [1, 3, 5, 6, 7, 8]

function removeDuplicate(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return "invalid input";
  }

  const newArray = [];
  for (const singleElement of arr) {
    console.log(singleElement);
    if (!newArray.includes(singleElement)) {
      newArray.push(singleElement);
    }
  }
  return newArray;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
