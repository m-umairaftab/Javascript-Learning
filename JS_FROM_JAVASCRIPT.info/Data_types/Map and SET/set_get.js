let john = { name: "John" };
let john2 = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
visitsCountMap.set(john2, 223);

console.log( visitsCountMap.get(john) ); // 123
console.log( visitsCountMap.get(john2) ); // 223
