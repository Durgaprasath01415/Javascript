const limit=200
let money=100
let count=0
let bets=0

while (money > 0 && money < limit ){
        gam = Math.floor(Math.random() * 2)
        if (gam == 0 ){
                console.log ("heads")
                money = money+1
                console.log (money)
                count = count+1
                console.log ("Number of times won : " +count)
                }
        else{
                console.log("tails")
                money = money-1
                console.log(money)
       }
bets = (bets+1)
console.log("number of bets : " +bets)
}
