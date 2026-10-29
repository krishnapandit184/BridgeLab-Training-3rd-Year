// Q1. Callback Function

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Demonstrate callback flow
greetUser("Krishna", showEndMessage);
