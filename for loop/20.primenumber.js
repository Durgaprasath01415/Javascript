const prompt = require('prompt-sync')();

let number = Number(prompt("Enter number : "));

let flag=0
for ( counter=1; counter < number; counter++ )
{
        if ((number%2 )) == 0 ){
                flag=1
                break;
       }
}
if ( flag == 0 )
        console.log ("This number is prime")
else
        console.log ("This number is not prime")