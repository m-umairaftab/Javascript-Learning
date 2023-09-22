// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith


let [firstname, surName] = "John Smith".split(' ');
console.log(firstname); // John
console.log(surName);  // Smith