// Q8. Add a custom myMap() method to arrays.
// This simplified implementation handles ordinary and sparse arrays.

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }

    return result;
};

const numbers = [1, 2, 3];

console.log(numbers.myMap(num => num * 2)); // [2, 4, 6]
console.log(numbers.myMap(num => num * num)); // [1, 4, 9]
console.log(numbers); // Original array remains unchanged: [1, 2, 3]

// Callback arguments: current element, index, and original array.
console.log([1, 2, 3].myMap((num, index) => num + index)); // [1, 3, 5]
