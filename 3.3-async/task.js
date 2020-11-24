'use strict'

// 1 Задание

class AlarmClock{
    constructor(){
      this.alarmCollection = [];
      this.timerId = null;
    }
    addClock(time, callback, id){
      if(!id){
        throw new Error(`Не существует ${id}`);
      }
      if(this.alarmCollection.some(item => item.id === id)){
        console.error(`звонок с таким ${id} уже существует`);
      } else this.alarmCollection.push({id, time, callback});
    }
    removeClock(id){
      this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    }
    getCurrentFormattedTime(){
      const date = new Date();
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      return hours + ':' + minutes;
    }
    start(){
      const checkClock = (alarm) => {
        if (alarm.time === this.getCurrentFormattedTime()){
          alarm.callback();
        }
      }
      if (!this.timerId) {
        this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
      }
    }
    stop(){
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
    printAlarms(){
      this.alarmCollection.forEach(item => console.log(`id: ${id}, time: ${time}`));
    }
    clearAlarms(){
      this.stop();
      this.alarmCollection = [];
    }
  }
  
  function testCase(){
    let alarmClock = new AlarmClock();
  
    alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Скоро спать!'), 1);
  
    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), () => {
      console.log('Пора готовиться ко сну!');
      alarmClock.removeClock(2);
      alarmClock.printAlarms();
    }, 2);
  
    try {
        alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
        () => console.log('Иди умываться!')); // Отсутствие ID
    } catch (e) {
        console.log(e);
    }
  
    alarmClock.addClock(new Date(Date.now() + 2 * 60000).toTimeString().substr(0, 5), () => {
        console.log('Иди спать, завтра рано на работу!');
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);
  
    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
    () => console.log('Иди спать, завтра рано на работу!'), 1); // Существующий ID
  
    alarmClock.printAlarms();
    alarmClock.start();
  }
  
  testCase();
  