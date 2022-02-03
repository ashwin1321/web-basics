// Modules are the external codes or libraries that we import

const fs = require("fs");            // To use modules we include in inside require()
let text = fs.readFileSync('abc.txt', "utf-8");     // reading the txt file

text = text.replace("beautiful",'funny')            // replacing the content inside a file
console.log(text);

fs.writeFileSync('ashwin.txt', text);
