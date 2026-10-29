// Q5. Person -> Student inheritance using prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit methods from Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Krishna", "Computer Science");

student1.showBranch();
student1.showName();

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
