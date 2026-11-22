// Q5: Frontend Pipeline - Callback Hell and Async/Await

// -------------------- Part A: Nested callbacks --------------------

function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("5. Celebration time!");
        if (callback) callback();
    }, 1000);
}

// Nested callbacks demonstrate callback hell.
function runWithCallbacks() {
    console.log("Starting pipeline with nested callbacks...");

    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate(() => {
                        console.log("Callback pipeline finished.");
                    });
                });
            });
        });
    });
}

// -------------------- Part B: Async/Await --------------------

// Return a Promise that resolves after one second.
function delay(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

// Async/await makes the sequence easier to read and maintain.
async function runWithAsyncAwait() {
    console.log("Starting pipeline with async/await...");

    try {
        await delay("1. Design completed");
        await delay("2. Build completed");
        await delay("3. Testing completed");
        await delay("4. Deployment completed");
        await delay("5. Celebration time!");

        console.log("Async/await pipeline finished.");
    } catch (error) {
        console.error("Pipeline error:", error.message);
    }
}

// Run one version at a time.
// Uncomment the version you want to test.

// runWithCallbacks();
runWithAsyncAwait();

// Why async/await improves readability:
// - It avoids deeply nested callback functions.
// - The sequence reads much like ordinary step-by-step code.
// - try/catch provides straightforward error handling for rejected Promises.
