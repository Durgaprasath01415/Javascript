function prime(number){

let flag=0
for ( count=1; count < number ; count++ ){
        if ((number%2 ) == 0 ){
                flag=1
                break
       }
 }
if ( flag == 0 )
        return "This number is prime"
else
        return "This number is not prime"
}

function palindromes(num){
const limit=10
let sd=0
let rev = 0
let num1 = num

while (num > 0 && sd < limit ){
        if ( num > 0) {
                sd = Math.trunc(num%10)
                rev = Math.trunc(rev *10 + sd)
                num = Math.trunc(num/10 )
        }
}
        if ( rev == num1 )
                return "palindrome"
        else
                return "not palindrome"
}

const prompt = require('prompt-sync')();
let num = Number(prompt("Enter number : "));

primenumber = prime ( num )
console.log( primenumber )
check = palindromes( num )
console.log( check )