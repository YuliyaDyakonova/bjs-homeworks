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
    let greetings;
    if (name == '' || name == null || name == undefined) {
        name = 'Аноним';
        greetings = `Привет, мир! Меня зовут ${name}`;
        console.log(greetings);
    } else {
        greetings = `Привет, мир! Меня зовут ${name}`;
        console.log(greetings);
    }
    console.log(name);
    return(greetings);
}