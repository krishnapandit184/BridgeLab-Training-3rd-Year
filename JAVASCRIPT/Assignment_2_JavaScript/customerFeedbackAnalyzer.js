let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
console.log("Word Count:", words.length);

feedback = feedback.toLowerCase();

if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}