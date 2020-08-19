function print() { 
    console.log("someVariable(" + someVariable + ") is a " + typeof someVariable);
    // Note: 'typeof' is explained later in this tutorial.
}

// Declare someVariable and initialize it to the number '5':
let someVariable = 5; 
print(someVariable);

// Assign the string "Hello" to someVariable:
someVariable = "Hello"; 
print(someVariable);

// Assign the boolean value 'true' to someVariable:
someVariable = true; 
print(someVariable);