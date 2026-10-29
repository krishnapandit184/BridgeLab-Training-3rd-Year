let numbers = [];
let results = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 3 === 0 && num % 5 === 0) {
        results.push(num + ": FizzBuzz");
    } else if (num % 2 === 0) {
        results.push(num + ": Even");
    } else {
        results.push(num + ": Odd");
    }
}

console.log(results);