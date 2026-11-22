// Q4: DevOps Delay - Promise.all() and Promise.race()

// Simulate Server A, which responds after 2 seconds.
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject(new Error("Server A deployment failed"));
            }
        }, 2000);
    });
}

// Simulate Server B, which responds after 3 seconds.
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject(new Error("Server B deployment failed"));
            }
        }, 3000);
    });
}

// Promise.all(): fulfills only when both servers fulfill.
// These calls start both server operations concurrently.
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Promise.all() error:", error.message);
    });

// Promise.race(): settles as soon as the first server operation settles.
// This starts a separate pair of simulated server operations.
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.error("Promise.race() error:", error.message);
    });

// Note: Promise.race() returns the first settled Promise. The first result
// may be a rejection, not necessarily a successful server response.
