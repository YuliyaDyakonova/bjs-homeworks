'use strict'

function getResult(a, b, c){
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let array = [];
	
  if (discriminant === 0) {
    let rootOne = -b / 2 * a;
    array.push(rootOne);
  } else if (discriminant > 0) {
    let rootOneOfTwo = (-b + Math.sqrt(discriminant)) / 2 * a;
    array.push(rootOneOfTwo);
    let rootTwoOfTwo = (-b - Math.sqrt(discriminant)) / 2 * a;
    array.push(rootTwoOfTwo);
  }
	
  let result = array;
	
  return result;
}

function getAverageMark(marks){
  let averageMark = 0;
  let arrayMark = marks;
	
  if (marks.length == 0) {
    return averageMark;
  }
	
  if (marks.length > 5) {
    console.log("оценок: " + marks.length);  // да
    arrayMark = marks.slice(0, 5)
  }
 
  if (marks.length > 0) {
    let sum = 0;
    for (let i = 0; i < arrayMark.length; i++) {
      sum += arrayMark[i];
    }

    return sum / arrayMark.length;
  }
}

function askDrink(name, dateOfBirthday){
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

  if (age >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}