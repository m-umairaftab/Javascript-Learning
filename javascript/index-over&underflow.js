function getValue(arr, pos) {
    if (pos < 0) {
        throw new Error("Index Underflow: " + pos);
    }

    let len = arr.length;

    if (pos >= len) {
        throw new Error("Index Overflow: " + pos);
    }

    return arr[pos];
}

function main() {
    var index;  
    const arr = [1, 2, 3, 4, 5];
    try {
        index = readLine()
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }
}