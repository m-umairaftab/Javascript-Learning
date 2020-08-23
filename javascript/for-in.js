var student ={
    firstName:"Umair",
    lastName:"Aftab",
    dateOfBirth:"november 3 2003",
    nationality:"pakistan"
}
for (var record in student){
    console.log("student ."+record+"="+student[record])
}