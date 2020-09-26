"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let credit = Number(amount) - Number(contribution);
    let monthNumber = (date.getFullYear() - new Date().getFullYear()) * 12;
    let P = (1 / 12) * (Number(percent) / 100);
    let payment = credit * (P + P / (Math.pow(1 + P, monthNumber) - 1));
    let totalAmount = payment * monthNumber;

    console.log(totalAmount.toFixed(2));
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    
    if(name){
        console.log("Привет, мир! Меня зовут ${name}");
        return "Привет, мир! Меня зовут ${name}";
    } else {
        console.log ("Привет, мир! Меня зовут Аноним");
        return "Привет, мир! Меня зовут Аноним";
    }
}