// console.log("Ashwin Khatiwada");

let name0 = "Ashwin";
let name1 = "A";
let name2= "As";
let name3 = "Ash";
// console.log(`${name} is a good boy.`)        // its easier for a single variable but boring for multiple variable. so we use functions


// FUNCTIONS 

function greet(name,greeting){                                          // defining a function
    console.log(`${greeting} ${name}. ${name} is a good boy.`)    

}
let greeting = 'Good Morning';
// function call 
greet(name0,greeting)
greet(name1,greeting)
greet(name2,greeting)
greet(name3,greeting)
 
let returnval = greet(name3);              // runs in the function but doesnot give anuthing. if return value is given than it gives that output 
console.log(returnval); 


function sum(a,b,c){
    d = a+b+c;
    return d;

    // # return bhanda tala ko kunai pani code chaldaina 
}
let returnvl = sum(1,2,3);              
console.log(returnvl);               
 
