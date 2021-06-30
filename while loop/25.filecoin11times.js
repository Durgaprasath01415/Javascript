let counter=0
let limit=11
let count=0
let count1=0
while ( counter >= 0 && count < limit && count1 < limit ){
        let coinflip = Math.floor(Math.random() * 2)
        if (coinflip == 0 ){
                console.log("Heads")
                count = count+1 
                }
        else{
                console.log("Tails")
                count1 = count1+1
                }
                counter = counter+1
}
 console.log("Total iterations = " +counter)