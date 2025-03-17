// Write a JavaScript function called replaceAllOccurrences that replaces all occurrences of a character in a given string with a new character.

// Input
// replaceAllOccurrences("hello world", "o", "0");

// Output: "hell0 w0rld"

// Explanation:
// In the string "hello world", all occurrences of the character "o" are replaced with "0", resulting in "hell0 w0rld".

function replaceAllOccurrences(str, char, newChar) {
  if (typeof str !== "string") {
    return "invalid input";
  }
  let newStr = "";

  for (const letter of str) {
    if (letter === char) {
      newStr += newChar;
    } else {
      newStr += letter;
    }
  }

  return newStr;
}

console.log(replaceAllOccurrences("hello world", "o", "0"));
console.log(replaceAllOccurrences("hello world", "o", "p"));
console.log(replaceAllOccurrences("hello world", "h", "k"));
console.log(replaceAllOccurrences("hello world", 0, "w"));
console.log(replaceAllOccurrences(4, "0", "w"));
