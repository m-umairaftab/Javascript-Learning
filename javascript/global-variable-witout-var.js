var a=8 // Global Variable
function sum(){
    b=6 // Global Variable Without Var in Function
    a=b+5
}
sum()
console.log("A = "+a)
console.log("B = "+b)