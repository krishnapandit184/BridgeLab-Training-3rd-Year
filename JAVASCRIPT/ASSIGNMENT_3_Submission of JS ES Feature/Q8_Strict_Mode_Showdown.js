
// correct ES6 version
"use strict";

function demo(a, b) {
    let total = 10;

    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Total:", total);
}

demo(5, 10);


// What is wrong with the original code?
// function demo(a, a) {
//     total = 10;
//     delete total;
// }

// There are three problems:
// 1. Duplicate parameters: a, a is not allowed in strict mode.
// 2. Undeclared variable: total = 10 attempts to create an accidental global variable.
// 3. Delete statement: delete total cannot delete a declared variable in strict mode.