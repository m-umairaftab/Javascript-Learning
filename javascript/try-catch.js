let arr = [1, 2, 3, 4, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
} 
catch (error) {
    console.log(error.message);
}