function root(n)
{
    var i=1;

    for(i=1; i<=n; i+=0.0001)
    {
        if( i*i >= n ) return i;
        console.log(i); 
        break;
    }
}
root(3);
