const EventEmitter = require("event:");

class MyEmitter extends EventEmitter {} 

const myEmitter =  new MyEmitter();

myEmitter.on("greet",(name) =>{
    console.log(`Hello, ${name}!`);
});

myEmitter.on("exit",()=>{
    console.log("Program is exitting...");
});

myEmitter.emit("greet","Sumit");

myEmitter.emit("exit")