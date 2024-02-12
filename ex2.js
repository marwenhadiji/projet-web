function Nombres_parfait(n)
{
    var s=0,i=1,b=1
    console.log("les nombres parfait inferieur a" +n)
    while(b<n)
    {
        var s=0,i=1
        while(i<b)
        {
            if(n%i!==0)
                i++
            else
                s+=i
                i++
        }
        if(s==b)
        console.log(":" +b)
    }
}