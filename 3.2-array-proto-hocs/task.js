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
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length){
    return arr1.every((value, index) => value === arr2[index]);
  } else {
    return false;
  }
}

// Задание

function memorize(fn, limit){
  let memory = [];
  return function (...args){

  }
}