const arr=['Rock', 'Scissors', 'Paper']
const playerRandomNumber=Math.floor(Math.random()*3)
console.log(playerRandomNumber)
const computerRandomNumber=Math.floor(Math.random()*3)
console.log(computerRandomNumber)
if(playerRandomNumber === computerRandomNumber){
    console.log('Result is tie.')
}
else if ((playerRandomNumber === 0) && (computerRandomNumber === 1)){
    console.log('Rock will beat out Scissor.')
    console.log('Player wins!')
}
else if ((playerRandomNumber === 1) && (computerRandomNumber === 0)){
    console.log('Scissor will not beat out Rock.')
    console.log('Computer wins!')
}
else if ((playerRandomNumber === 1) && (computerRandomNumber === 2)){
    console.log('Scissor will beat out Paper.')
    console.log('Player wins!')
}
else if ((playerRandomNumber === 2) && (computerRandomNumber === 1)){
    console.log('Paper will not beat out Scissor.') 
    console.log('Computer wins!')
}
else if ((playerRandomNumber === 2) && (computerRandomNumber === 0)){
    console.log('Paper will beat out Rock.')
    console.log('Player wins!')
}
else if ((playerRandomNumber === 0) && (computerRandomNumber === 2)){
    console.log('Rock will not beat out Paper.')
    console.log('Computer wins!')
}