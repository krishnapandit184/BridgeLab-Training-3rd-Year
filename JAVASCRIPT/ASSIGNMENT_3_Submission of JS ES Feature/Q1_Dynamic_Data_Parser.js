"use strict";
const apiData = ["25", "true", "false", "NaN", " ","100px", "3.14", null, undefined];
let valid=[];
let invalid=[];

for(let i=0;i<apiData.length;i++){
    let value=apiData[i];
    let num=Number(value);
    let bool=Boolean(value);
    let str=String(value);

    console.log(str);
    console.log(num);
    console.log(bool);
    console.log(str);
    if (num >= 0 && !isNaN(num) && value !== " ") {
        valid.push(num);
    } else {
        invalid.push(value);
    }
    
}

console.log("Valid numbers:",valid);
console.log("Invalid numbers",invalid);