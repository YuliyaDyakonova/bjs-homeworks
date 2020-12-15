'use strict'
// Задание 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(n){
    if (n < 0){
      this._state = 0;
    } else if (n > 100){
      this._state = 100;
    } else{
      this._state = n;
    }
  }
  get state() {
    return this._state;
  }
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author; 
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задание 2

class Library {
  constructor (name, books=[]){
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    book.state > 30 ? this.books.push(book) : null;
  }

  findBookBy(key, value){
    let flag = false;
    for (let i = 0; i <this.books.length; i++){
      if (this.books[i][key] === value) {
        flag = true;
        return this.books[i];
      }
    }
    if (!flag) return null;
  }

  giveBookByName(bookName) {
    let flag = false;
    for (let i = 0; i <this.books.length; i++){
      if (this.books[i].name === bookName) {
        flag = true;
        let  book = this.books[i];
        this.books.splice(i,1)
        return book;
      }
    }
    if (!flag) return null; 
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//Задания 3

class StudentLog{

  grades = {};
  constructor(name){
    this.name = name;
  }
  getName (){
    return this.name;
  }

  addGrade(grade, subject){
    if (Number(grade)){
      if (grade >= 1 && grade <=5){
        if (!this.grades[subject]) this.grades[subject] = [];
        this.grades[subject].push(grade);
        return this.grades[subject].length;
      } else {
        console.log( `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`);
        if (this.grades[subject]) return this.grades[subject].length;
        else return 0;
      }

    }else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`);
      if (this.grades[subject]) return this.grades[subject].length;
      else return 0;
    } 
  }

  getAverageBySubject(subject){
    if (this.grades[subject]){
      let summ = 0;
      for (let i = 0; i < this.grades[subject].length; i++){
       summ += Number(this.grades[subject][i]);
      }
      return summ / this.grades[subject].length;
    }else return 0;
  }

  getTotalAverage(){
    if (this.grades){
      let summ = 0;
      for (let subject in this.grades){
        let average = this.getAverageBySubject(subject);
        summ += average;
      }
      return summ / Object.keys(this.grades).length;
    }else return 0;
  }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1

// console.log(log.addGrade('отлично!', 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0

// console.log(log.addGrade(4, 'algebra'));
// // 2

// console.log(log.addGrade(5, 'geometry'));
// // 1

// console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75