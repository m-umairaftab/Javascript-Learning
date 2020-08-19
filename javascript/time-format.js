// var dt = "2:05 PM";
// console.log(ConvertTime(dt));
// function ConvertTime(t){
//    var time = new Date("0001-01-01 " + t);
//    var formatted = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);
//    return formatted;
// }
var time="12:45:54PM"
var timeArray=time.split(":")
var hour=timeArray[0]
var mint = timeArray[1]
var sec=timeArray[2].slice(0,2)
var format=timeArray[2].slice(2)
if(format === "PM" && hour !== '12'){
   hour = +hour+12
}
if(format === "AM" && hour === '12'){
   hour='00'
}
time = hour+':'+mint+':'+sec
console.log(time)