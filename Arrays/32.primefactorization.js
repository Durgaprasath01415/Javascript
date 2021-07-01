const prompt = require('prompt-sync')();
array =[];
let num = Number(prompt("Enter a number : "));

for( count=2; num>1; count++){
        while (( num%count ) == 0 ){
                console.log(count);
                array[count] = count;
                num = num/count;
        }
    }
console.log(array);