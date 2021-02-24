
output = min(1,2);
console.log(output);

function min (x,y)
{
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

console.log(range(1,10));

funtion range(start, end)
{
    myArray= new Array();
    for (num=start; num <=end; num++)
    {
        myArray[num] = [num];
        console.log(myArray[num]=[num]);
    }
}