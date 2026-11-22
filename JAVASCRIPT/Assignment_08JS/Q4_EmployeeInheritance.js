// Q4: Employee Inheritance and Runtime Polymorphism

// Parent class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is performing regular ${this.department} work.`);
    }
}

// Manager inherits properties and methods from Employee.
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Override the parent class work() method.
    work() {
        console.log(
            `${this.name} is managing the ${this.department} department and leading ${this.teamSize} employees.`
        );
    }
}

// Create objects of both classes.
const employee1 = new Employee("Aman", "Development");
const manager1 = new Manager("Neha", "Engineering", 8);

// Runtime polymorphism:
// The same method name work() behaves differently depending on the object.
const team = [employee1, manager1];

team.forEach((person) => {
    person.work();
});
