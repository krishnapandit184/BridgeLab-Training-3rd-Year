let expenses = [3000, 1000, 5000, 1500, 500];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;
let tax = total * 10 / 100;
let finalAmount = total + tax;

console.log("Total Expenses:", total.toFixed(2));
console.log("Average Expenses:", average.toFixed(2));
console.log("Final Amount with Tax:", finalAmount.toFixed(2));