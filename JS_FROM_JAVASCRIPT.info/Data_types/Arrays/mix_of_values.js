let arr = ['orange', true, {name: 'umair'}, function(){
    return 'hello'
}];
console.log('At index 0 : ', arr[0]);
console.log('At index 1 : ', arr[1]);
console.log('At index 2 : ', arr[2]);
console.log('At index 2, we get name : ', arr[2].name);
console.log('At index 3 : ', arr[3]());