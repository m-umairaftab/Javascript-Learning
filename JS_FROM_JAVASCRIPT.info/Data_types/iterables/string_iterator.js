// for (let char of "test") {
//     // triggers 4 times: once for each character
//     alert(char); // t, then e, then s, then t
// }

// Another method

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // outputs characters one by one
}