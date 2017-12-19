//Example 1
//comment out example 2 to run this
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var eventHandler = function () {
  console.log('This events works on create!');
}

//Assign the event handler to an event:
eventEmitter.on('create', eventHandler);

//Fire the 'create' event:
eventEmitter.emit('create');


//Example 2
// comment out example 1 to run this

var events = require('events');
var eventEmitter = new events.EventEmitter();

var i = 0;

//Create an event handler:
var eventHandler = function () {
  console.log(i);
  i++
}

//Assign the event handler to an event:
eventEmitter.on('create', eventHandler);//everytime create is run, it increases i by 1

//Fire the 'create' event:
eventEmitter.emit('create');
eventEmitter.emit('create');
eventEmitter.emit('create');
