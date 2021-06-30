number[] = {1,2,3,4,5,6,7,8,9,10}
flag=0
        for ( counter=2; counter<number; counter++ )
        {
                if (( number%counter ) == 0 )
                {
                        flag=1
                        break
                }
        }
        if (flag == 0 )
                console.log(seq +"This number is prime")
        else
                console.log(seq +"This number is not prime")