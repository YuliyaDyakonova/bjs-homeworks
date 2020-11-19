'use strict'

// 1 задание
const parseCount =  (a) => {
  if (isNaN(Number.parseInt(a))){
    const divideError = new Error("Невалидное значение");
    throw divideError;
  }
  return Number.parseInt(a);
};

function validateCount(a){
  try{
    return parseCount(a)
  } catch(error){
    return error;
  }
}

// 2 задание

class Triangle {
  constructor(a, b, c){
    if ((a +b) < c || (a + c) < b || (b + c) < a){
      throw new Error("Треугольник с такими сторонами не существует");
    }
      this.a = a;
      this.b = b;
      this.c = c;
    
  }
  getPerimeter(){
    return this.a + this.b + this.c;
  }
  getArea(){
    const p = this.getPerimeter() / 2;
    return Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c){
  try{
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },

      getArea() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}