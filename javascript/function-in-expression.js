function multiply(num1,num2){
    return num1*num2
}
function sum(a,b){
    return multiply(a,b)+b
}
var mul=multiply(8,3)
var add =sum(multiply(7,3),5)
var add =sum(7,5)
console.log("Multiply= ",mul)
console.log("Addition = ",add)