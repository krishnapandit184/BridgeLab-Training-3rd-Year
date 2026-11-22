// Q3: Bug Tracker - Convert Callback to Promise

// Promise-based replacement for the original fetchBugs(callback) function.
function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs from the server...");

        setTimeout(() => {
            // Simulate an API failure with a boolean value.
            const apiFailure = Math.random() < 0.3;

            if (apiFailure) {
                reject(new Error("API Error: Unable to fetch bugs!"));
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

// Fetch and display the bugs.
getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error(error.message);
    });
