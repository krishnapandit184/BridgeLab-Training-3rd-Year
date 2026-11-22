// Q1: Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate the average marks using reduce().
    calculateAverage() {
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return totalMarks / this.marks.length;
    }

    // Return a grade based on the student's average.
    calculateGrade() {
        const average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Test the class for three students.
const students = [
    new Student("Aarav", [92, 88, 95, 90]),
    new Student("Riya", [82, 85, 79, 84]),
    new Student("Kabir", [65, 72, 68, 60])
];

students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Marks: ${student.marks.join(", ")}`);
    console.log(`Average: ${student.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${student.calculateGrade()}`);
    console.log("-------------------------");
});

// Grade scale used:
// A = 90 and above, B = 80-89, C = 70-79, F = below 70.
