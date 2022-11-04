
const prompt = require('prompt-sync')()
const num1 = prompt('Enter the digit that\'s table want you print : ')
const num2 = prompt('Enter the digit as far as you want to print table : ')
for(let i = 1; i<= num2; i++){
    console.log(num1, 'x', i, '=', num1*i)
}