"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        let age = Number(data.age);

        if (isNaN(age)) {
            throw new Error("Invalid age");
        }

        if (age >= 18) {
            cleanData.push({
                user: data.user,
                age: age
            });
        } else {
            console.log("Line", i + 1, ": User is under 18");
        }

    } catch (error) {
        console.log("Line", i + 1, ":", error.message);
    }
}

console.log("Clean Data:", cleanData);