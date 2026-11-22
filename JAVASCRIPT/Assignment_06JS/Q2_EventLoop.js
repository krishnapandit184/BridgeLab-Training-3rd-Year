// Q2: JavaScript Event Loop - Microtasks vs Macrotasks

console.log("Start");

// setTimeout callback is queued as a macrotask.
setTimeout(() => {
    console.log("setTimeout callback - Macrotask");
}, 0);

// Promise.then callback is queued as a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback - Microtask");
});

// This is synchronous code, so it runs immediately.
console.log("Synchronous log");

console.log("End");

// Explanation:
// 1. JavaScript first executes all synchronous code in the current call stack.
// 2. When the call stack is empty, it processes queued microtasks.
// 3. After the microtask queue is empty, it can process macrotasks such as
//    the setTimeout callback.
// Therefore, the Promise.then() callback runs before the setTimeout callback.
