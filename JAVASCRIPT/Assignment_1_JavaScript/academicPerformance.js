let marks = [85, 90, 78, 88, 92];

let total = 0;
let detained = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        detained = true;
    }
}

let average = total / marks.length;
let percentage = total / 500 * 100;

console.log("Average:", average);
console.log("Percentage:", percentage + "%");

if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}