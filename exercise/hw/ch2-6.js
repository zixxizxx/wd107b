function commonFactor(a, b){
    var m, n, gcd;

    if(a < b)
    {
        m=b;
        n=a;
    }
    else(a > b)
    {
        m=a;
        n=b;
    }
    for(var i=1; i<=n; i++)
    {
        if(m%i == 0)
        {
            if(n%i == 0) gcd=i;
        }
    }
    return gcd;
}
var a=12, b=15;
console.log("commonFactor(%d, %d) =>", a, b, commonFactor(a, b));