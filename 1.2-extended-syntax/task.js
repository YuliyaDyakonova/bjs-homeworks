"use stric";

function getResult(a,b,c){
    let discriminant = (b ** 2) - (4 * a * c);
    let x = [];
    if (discriminant === 0) {
        x = [-b / (2 * a)];
    } else if (discriminant > 0) {
        x.push((-b + (Math.sqrt(discriminant))) / (2 * a));
        x.push((-b - (Math.sqrt(discriminant))) / (2 * a));  
    }
    return x;
}

function getAverageMark(marks){
    if (marks.length === 0){
        return 0;
    } else if (marks.lenght > 5){
        console.log('Количество оценок больше 5');
        marks.splice(5);
    }
    let sum = 0;
    for (let i= 0; i < marks.length; i++){
        sum += marks[i];
      }
      let averageMark = sum / marks.length;
      return averageMark; 
}

function askDrink(name,dateOfBirthday){
    let result;
    let differenceAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let canDrink = `Не желаете ли олд-фэшн, ${name}?`;
    let notCanDrink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    result = notCanDrink;

    if (differenceAge > 18) {
        result = canDrink;
    } else if (differenceAge == 18) {
        
        if (dateOfBirthday.getMonth() < new Date().getMonth()) {
            result = canDrink;
        }
        if ((dateOfBirthday.getMonth() == new Date().getMonth()) && (new Date().getDate() >= dateOfBirthday.getDate())) {            
            result = canDrink;
        }
    }   
    return result;
}