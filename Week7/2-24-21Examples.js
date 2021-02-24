
output = min(1,2);
console.log(output);

function min (x,y){
    if (x===y)
    {
        return "The Numbers are Equal";
    }
    if (x<y)
    {
        return x;
    }
    else
    {
        return y;
    }
}