let count = 0;

function increment() {
    count++;
    console.log(count);
}

function decrement() {
    count--;
    console.log(count);
}

function showCount() {
    function display() {
        console.log("Current Count:", count);
    }

    display();
}

increment();
increment();
decrement();
showCount();