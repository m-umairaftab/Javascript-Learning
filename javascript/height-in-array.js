
var arr=[3,6,3,6,1]
var max=0
var count = 0
for(var i =0 ; i < arr.length ; i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
for (var i = 0 ; i < arr.length ; i++){
    if(arr[i] === max){
        count++
    }
}
console.log(count)