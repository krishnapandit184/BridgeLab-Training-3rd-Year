
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 50000),
    new Employee(2, "Riya", "HR", 40000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Priya", "IT", 60000),
    new Employee(5, "Karan", "Sales", 35000)
];

// Display annual salary of each employee
employees.forEach(employee => {
    console.log(
        `${employee.name}: Annual Salary = ₹${employee.getAnnualSalary()}`
    );
});

// Apply a 10% bonus to the first employee
employees[0].applyBonus(10);

console.log("\nAfter applying bonus:");
console.log(
    `${employees[0].name}: Annual Salary = ₹${employees[0].getAnnualSalary()}`
);

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\nTotal Annual Company Payout: ₹" + totalAnnualPayout);
