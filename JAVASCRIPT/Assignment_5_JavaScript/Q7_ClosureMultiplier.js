// Q7. Closure: makeMultiplier()

function makeMultiplier(multiplier) {
    return function (number) {
        // The inner function remembers `multiplier` through a closure.
        return number * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20
