
const prompt = require('prompt-sync')();

let number = Number(prompt("Enter number : "));

for (let counter=2; counter <=number; counter++){
        let power = (2**counter)
        console.log("2" "^" +counter "=" +power)
        }