'use strict'

// 1 задание

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ){
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// Задание

function memorize(fn, limit){
  const memory = [];
  return function (...args){
    const element = memory.find(item => {
      compareArrays( item.args, args);
    });
    if(element){
      return element.result;
    }
    let result = fn(...args);
    memory.push({args, result});
    if (memory.length > limit){
      memory.shift();
    }
    return result;
  }
}

function testCase(testFunction, time){
  let args = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(time);
  args.forEach(item => {
    testFunction(item);
  });
  console.timeEnd(time);
}

const mSum = memorize(sum, 5);

console.log(testCase(sum, 'sum'));
console.log(testCase(mSum, 'mSum'));