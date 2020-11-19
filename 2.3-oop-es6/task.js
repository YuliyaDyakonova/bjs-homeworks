'use strict'
String.prototype.isPalindrome = function () {
    const text = this.toLowerCase().split(' ').join('');
    const reverseText = text.split('').reverse().join('');
    return text === reverseText;
};
console.log("А роза упала на лапу Азора".isPalindrome());

Array.prototype.roundedAverage = function () {
   let summ = 0;
   for (let i = 0; i < this.length; i++){
       summ += Number(this[i]);
   }
   const average = summ / this.length;
    return Math.round(average);
}
function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    return marks.roundedAverage();
}

function checkBirthday(birthday) {
    const now = new Date();
    const born = new Date(birthday);
    const diff = now - born;
    const age = diff / (1000 * 60 * 60 * 24 * 365.242);
    return age > 18;
}