var a = ['c', 'a', 'd', 'b', 'aa'];

// Sort in descending lexicographical order using a compare arrow function
a.sort((x, y) => x < y);

console.log('a:', a);