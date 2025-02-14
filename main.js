let sentence = "U";
sentence = sentence.toLowerCase();

let count = ["a", "e", "i", "o", "u"];
let countValue = true;
for (i = 0; i < count.length; i++) {
  if (sentence.includes(count[i])) {
    countValue = true;
  } else {
    countValue = false;
  }
}

console.log(countValue);
