"use strict"

let num1=25;
let num2=0;
let operation="divide";

try{
    let result;
    switch(operation){
        case "add":
            result=num1+num2;
            break;
        case "substract":
            result=num1-num2;
            break;
        case "divide":
            if(num2===0){
                throw new Error("cannot divide by zero");
            }
            result=num1/num2;
            break;
        case power:
            result=num1**num2;
            break;
        case "root":
            if(num1 < 0){
                throw new Error("cannot find real square root");
            }
            result=Math.sqrt(num1);
            break;
        default:
            throw new Error("Invalid Operation");
}
console.log(result);
}catch(error){
    console.log(error.message);
}