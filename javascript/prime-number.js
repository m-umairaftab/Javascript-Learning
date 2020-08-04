var num=Number(prompt("please enter number"))
var isPrime=true
for(var i = 2 ; i < num ; i++)
{
    var result=num%i
    if(result==0)
    {
        console.log("Number is not prime = "+num+"/"+i)
        isPrime=false
        break
    }
}
if(isPrime)
{
    console.log("Number is prime =" +num)
}