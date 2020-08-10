var a=[45,9,5,2]
function test(val){
    console.log("VAl Before = "+val)
    val[2]=34
    console.log("VAl After = "+val)
}
test(a)
console.log("A after = "+a)