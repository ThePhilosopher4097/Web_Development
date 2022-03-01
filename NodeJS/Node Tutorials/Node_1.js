const Logger = require("./logger")
const OS = require('os')
const FS = require('fs')

//---------------------------------------

console.log(Logger)

Logger.log("Hello !\n")

console.log(__dirname)
console.log(__filename+"\n")

//------------------------------------------

var totalFreeMemory = OS.totalmem();
var freeMemory = OS.freemem();

// Template string 
// ES6 / ES2015 : ECMAScript 6
console.log(`Total Memory = `+totalFreeMemory);
console.log(`Free Memory = ${freeMemory}\n`);

//----------------------------------------

const files = FS.readdirSync('./')
console.log(files)

FS.readdir('./', function(err, files) {
    if (err)
        console.log('Error : ', err)
    else 
        console.log("Result : ", files)
})

//-----------------------------------------------

