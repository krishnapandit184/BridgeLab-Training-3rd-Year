"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for(let i=0;i<transactions.length;i++){
    try{
        let t=transactions[i];
        if(t===null){
            throw new Error("Transaction is null");
        }
        if(t.id === undefined || t.amount === undefined){
            throw new Error("ID or amount is missing");
        }
        if(t.amount < 0){
            throw new Error("Negative amount");
        }
        valid.push(t);
        console.log(t.id);
    }catch(error){
        invalid.push(transactions[i]);
        console.log(error.message);
    }
}
console.log(valid.length);
console.log(invalid.length);

