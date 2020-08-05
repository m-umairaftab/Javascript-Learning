var arr=[32,33,54,87,12,45]
var input=Number(prompt("enter number to find"))
console.log("User Input ",input)
found=false
for(var i = 0 ; i < arr.length ; i++)
{
    if(arr[i]===input)
    {
        console.log("found "+input+" on index "+i)
        found=true
        break
    }
}
if(!found)
{
    console.log("Not found")
}