function clculteScore(sub1,sub2,sub3){
    return (sub1+sub2+sub3)/3
}
function findGrade(score){
    if(score >= 80 && score <= 100){
        console.log("Grade A")
    }
    else if(score >= 70 && score <= 80){
        console.log("Grade B")
    } 
    else if(score >= 60 && score <= 70){
        console.log("Grade C")
    } 
    else {
        console.log("Grade F")
    } 
} 
var score1=clculteScore(45,67,89)
console.log("Score1 = "+score1)
findGrade(score1)
var score2=clculteScore(95,72,87)
console.log("Score2 = "+score2)
findGrade(score2)