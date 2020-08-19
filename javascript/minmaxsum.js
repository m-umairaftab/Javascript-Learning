var arr=[3,2,7,1,5,4]
var minSum = 0
var maxSum = 0
function miniMaxSum(arr) {
    for (var i = arr.length ; i >= 0 ; i--){
        for (var j = 0 ; j < i ; j++){
            if(arr[j] > arr[j+1]){
                var a = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = a
            }
        }
    }
    for (var i = 0 ; i < arr.length ; i++){
        if(i !== 0){
            maxSum+=arr[i]
        }
        if (i !== arr.length-1){
            minSum+=arr[i]
        }
    }
    console.log(minSum +'  ' + maxSum)
}
miniMaxSum(arr)