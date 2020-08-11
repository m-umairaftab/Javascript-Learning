var doContinue=true
while(doContinue){
    console.log("Hello")
    var input=prompt("Please enter y to run again or any key to stop")
    if(input.toLowerCase()!=="y")
    doContinue=false 
}
console.log("Loop Stop")