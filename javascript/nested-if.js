var score=prompt("what is your score")
score=Number(score)
if (score >= 80)
{
    console.log("Grade =A+")
    if(score >= 90)
    {
        console.log("Reward $100")
    }
    else if(score >= 85)
    {
        console.log("Reward $50")
    }
    else 
    {
        console.log("Reward $20")
    }
}
else if (score >= 70)
{
    console.log("Grade =A")
}
else if (score >= 60)
{
    console.log("Grade =B+")
}
else if (score >= 50)
{
    console.log("Grade =B")
}
else if (score >= 40)
{
    console.log("Grade =C")
}
else if (score >= 33)
{
    console.log("Grade =D")
}
else 
{
    console.log("Failed")
}