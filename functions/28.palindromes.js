function palindromes(num,num1){
//let num=1
//let num1=2
let limit=10
let sd=0
let rev = 0

while (num > 0 && sd < limit ){
        if ( num > 0) {
                sd = Math.trunc(num%10)
                console.log(sd +" sd")
                rev = Math.trunc(rev *10 + sd)
                console.log(rev +" rev")
                num = Math.trunc(num/10 )
                console.log(num +" num")
        }
}
        if ( rev == num1 )
                return "palindrome"
        else
                return "not palindrome"
}
const prompt = require('prompt-sync')();

let number1 = Number(prompt("Enter a number 1 : "));
let number2 = Number(prompt("Enter a number 2 : "));

check = palindromes (number1 , number2)
console.log("check = " +check)