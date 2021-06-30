const prompt = require('prompt-sync')();
let year = Number(prompt("Enter a year: "));

let a=year%4
let b=year%400
let c=year%100

if ( a == 0 || b == 0 || c == 0 )
        console.log (year +" is a leap year")
else
        console.log (year + " is not a leap year")