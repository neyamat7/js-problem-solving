// problem 4
// function calculateFinalScore(student) {
//   if (
//     typeof student === "object" &&
//     typeof student.name === "string" &&
//     typeof student.testScore === "number" &&
//     student.testScore <= 50 &&
//     student.schoolGrade <= 30 &&
//     typeof student.schoolGrade === "number" &&
//     typeof student.isFFamily === "boolean"
//   ) {
//     let finalScore = student.testScore + student.schoolGrade;

//     if (student.isFFamily) {
//       finalScore += 20;
//     }

//     if (finalScore >= 80) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return "Invalid Input";
//   }
// }

// console.log(
//   calculateFinalScore({
//     name: "rakib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );

// problem 5
// function waitingTime(timeArray, serial) {
//   if (
//     Array.isArray(timeArray) !== true ||
//     typeof serial !== "number" ||
//     timeArray.length > serial - 1
//   ) {
//     return "Invalid Input";
//   }

//   let totalTime = 0;

//   for (const time of timeArray) {
//     totalTime += time;
//   }
//   const averageTime = Math.round(totalTime / timeArray.length);
//   const remainingPerson = serial - 1 - timeArray.length;
//   const remaningTime = remainingPerson * averageTime;
//   return remaningTime;
// }

// console.log(waitingTime([6], 4));
