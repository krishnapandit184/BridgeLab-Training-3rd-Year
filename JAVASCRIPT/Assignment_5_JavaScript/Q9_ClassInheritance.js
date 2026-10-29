// Q9. Person -> Student inheritance using ES6 classes

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // Initialize inherited properties before using `this`.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student1 = new Student("Krishna", "Computer Science");

student1.showBranch();
student1.showName();

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true

// ES6 classes use JavaScript's prototype-based inheritance internally.
