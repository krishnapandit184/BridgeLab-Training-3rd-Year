let name = "Om";
let age = 20;
let isStudent = true;
let marks = [80, 85, 90];
let student = { name: "Om", age: 20 };
let address = null;
let result;

console.table([
    { label: "Name", value: name, type: typeof name },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Marks", value: marks, type: Array.isArray(marks) ? "array" : typeof marks },
    { label: "Student Object", value: JSON.stringify(student), type: typeof student },
    { label: "Address", value: address, type: "null" },
    { label: "Result", value: result, type: typeof result }
]);