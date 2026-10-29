"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for(let i=0;i<employees.length;i++){
    try{
        let name=employees[i].name;
        let salary=Number(employees[i].salary);
        let years=Number(employees[i].years);
        let bonus;
        if(years > 3){
            bonus=salary*0.10;
        }else{
            bonus=salary*0.05;
        }
        console.log(name);
        console.log(salary);
        console.log(years);
        console.log(bonus);
    }catch(error){
        console.log(error.message);
    }
}

