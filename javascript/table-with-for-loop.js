var table = prompt("Please enter the table which you want to print")
table = Number(table)
for (i = 1; i <= 10; i++ ){
    console.log(table+" X "+i+" = "+ (i*table));
}