//Loading 'EventEmitter' class of 'events' module
var events = require('events');
//Creating an object 'emitter' of 'EventEmitter' class
var emitter = new events.EventEmitter();

function FirstListener(){
    console.log("First Listener!");
}
function SecondListener(){
    console.log("Second Listener!");
}
emitter.addListener('click',FirstListener);
emitter.addListener('click',SecondListener);

function add(num1,num2){
    var sum = num1+num2;
    console.log(sum);
}
emitter.addListener('click',add);
emitter.emit('click',10,30);


/*
emitter.on('click',function FirstListener()
                    { 
                        console.log("First Listener!");
                    })
emitter.on('click',function SecondListener(data)
                    { 
                        console.log("Second Listener!"+data);
                    })
emitter.emit('click','This is a second call to emit()');    
console.log(emitter.listenerCount('click'));            
emitter.removeListener('click',FirstListener);
console.log(emitter.listenerCount('click')); 
*/