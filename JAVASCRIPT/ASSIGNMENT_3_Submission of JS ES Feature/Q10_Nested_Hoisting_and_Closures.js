"use strict";

function outer() {
    console.log(count);

    var count = 5;

    function inner() {
        console.log(count);

        var count = 10;
    }

    inner();
}

outer();

// Why?
// 1. When outer() starts, its local count declaration is hoisted and initialized with undefined.
// 2. The first console.log() runs before count = 5.
// 3. The inner function has its own local count variable.
// 4. That inner variable is also hoisted and initialized with undefined, so the second console.log() prints undefined.

"use strict";

function outer() {
    var count = 5;

    const inner = () => {
        console.log(count);
    };

    inner();
}

outer();