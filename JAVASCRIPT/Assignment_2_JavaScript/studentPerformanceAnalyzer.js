let scores = [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
    return Math.floor(Math.random() * 71) + 30;
});

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

let passed = scores.filter(score => score >= 50);

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Students Passed:", passed.length);