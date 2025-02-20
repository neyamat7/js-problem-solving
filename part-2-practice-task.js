//task -1
// Find the lowest number in the array below:
// const heights = [30, 154, 20, 167, 190, 120, 165, 137];

// function findLowestNumber(numbers) {
//   let lowestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < lowestNumber) {
//       lowestNumber = number;
//     }
//   }
//   return lowestNumber;
// }

// console.log(findLowestNumber(heights));

// task -2
// Find the friend with the smallest name.

// const friendsName = [
//   "kamrul",
//   "shahalam",
//   "mithu",
//   "noman",
//   "mahbub",
//   "asad",
//   "jashim",
// ];

// function smallestName(names) {
//   let smallestName = names[0];
//   for (const name of names) {
//     if (name.length < smallestName.length) {
//       smallestName = name;
//     }
//   }
//   return smallestName;
// }

// console.log(smallestName(friendsName));

// task -3
// Your task is to calculate the total budget required to buy electronics
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// items prices in taka
// const laptopPrice = 35000;
// const laptopQuantity = 2;
// const tabletPrice = 15000;
// const tableQuantity = 4;
// const mobilePrice = 20000;
// const mobileQuantity = 5;

// function calculateElectronicsBudget(
//   laptopQuantity,
//   tabletQuantity,
//   mobileQuantity
// ) {
//   const laptopTotalPrice = laptopPrice * laptopQuantity;
//   const tabletTotalPrice = tabletPrice * tabletQuantity;
//   const mobileTotalPrice = mobilePrice * mobileQuantity;
//   const totalBudget = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
//   return totalBudget;
// }

// console.log(
//   calculateElectronicsBudget(laptopQuantity, tableQuantity, mobileQuantity)
// );

// task -4
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones) {
//   let totalPhonePrice = 0;
//   for (const phone of phones) {
//     totalPhonePrice += phone.price;
//   }
//   const averagePrice = totalPhonePrice / phones.length;
//   return averagePrice.toFixed(2);
// }

// console.log(findAveragePhonePrice(phones));

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

// const employees = [
//   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function totalSalary(employees) {
//   let totalSalary = 0;
//   for (const employee of employees) {
//     const increment = employee.experience * employee.increment;
//     const salary = employee.starting + increment;
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// console.log(totalSalary(employees));
