const prompt = require('prompt-sync')();
let num = Number(prompt("Enter number : "));

for ( count=2; num>1; count++ ){
        while (( num%count ) == 0 ){
                console.log (count)
                num=num/count
        }
}