// Q2. Apply Operation Using Callback

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function doubleNumber(num) {
    return num * 2;
}

function squareNumber(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(numbers, doubleNumber));
console.log("Squared:", applyOperation(numbers, squareNumber));

// Arrow-function callback examples:
console.log("Doubled with arrow:", applyOperation([1, 2, 3, 4], num => num * 2));
console.log("Squared with arrow:", applyOperation([1, 2, 3, 4], num => num * num));
