let salary = 40000;
let incrementRate = 10;
let salaries = [];

for (let year = 1; year <= 5; year++) {
    salary = salary + salary * incrementRate / 100;
    salary = Math.round(salary);

    salaries.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaries);