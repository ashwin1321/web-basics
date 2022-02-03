// synchronous or blocking
// --> line by line execution 

// asynchronous or non-blocking
// --> line by line execution not guaranteed
    // call backs will fire 


 // previuos file is the example of synchronous or blocking, where we used fs.readFileSync


// here we use asynchronous method where, we use fs.readFile(fiel.txt, {function})

const fs = require("fs");            // To use modules we include in inside require()
const { readFile } = require("node:fs/promises")
 fs.readFile('abc.txt', "utf-8", (err,data) =>{
    console.log(data);
});    
console.log("This is the message")

 
 