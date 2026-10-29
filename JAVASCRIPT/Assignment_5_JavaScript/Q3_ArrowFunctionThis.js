// Q3. Arrow Function and `this`

// Incorrect: an arrow function does not get its own `this`.
const userWithArrow = {
    name: "Krishna",

    showName: () => {
        console.log(this.name);
    }
};

userWithArrow.showName(); // Usually undefined in a Node.js CommonJS file

// Correct: a normal function gets `this` from its call-site.
const userWithNormalFunction = {
    name: "Krishna",

    showName: function () {
        console.log(this.name);
    }
};

userWithNormalFunction.showName(); // Krishna

// Note: Arrow functions capture `this` lexically from the surrounding scope.
// In a typical Node.js CommonJS file, the surrounding `this` is module.exports.
