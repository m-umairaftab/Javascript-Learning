const prompt=require('prompt-sync')()
const num1=prompt('Enter any number : ')
let randomNumber=Math.random()
randomNumber*=10
const num2=Math.floor(randomNumber)
if(num1 > num2 ){
    console.log(num1, 'is greater than ', num2)
}
else if(num1 < num2){
    console.log(num1, 'is less than ', num2)

}
else{
    console.log(num1, 'is equal to ', num2)

}