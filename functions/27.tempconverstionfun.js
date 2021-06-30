function degree_f(DegC){
        DegF = (( DegC*9/5 ) +32 )
        return DegF
}
function degree_c(DegF ){
        DegC = ((DegF-32 )*5/9 )
       return DegC
}
const prompt = require('prompt-sync')();

let num = Number(prompt("Enter number : "));
let choice = Number(prompt("Enter choice : "));

switch(choice){
        case 1:
                if (num > 0 && num < 100){
                        F_degree = degree_f (num )
                        console.log ("fahrenheit=" +F_degree)
                        }
                else
                        console.log ("Invalid Number")
                        break;
        case 2:
                if ( num > 32 && num < 212 ){
                        C_degree = degree_c (num )
                        console.log("celsius" +C_degree)
                        }
                else
                        console.log ("Invalid Number")
                        break;
}