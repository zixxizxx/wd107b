function isPrime(a){
    var i;

    if(a == i)
    {
        return 0;
    }    
    else 
    {
        for(i=2; i<a; i++)
        {
            if(a%i == 0)
            {
                return 0;
            }
        }
    }
    return 1;
    
}