let list=[]
list.splice(0, 0, "Milk", "Bread", "Apple")
list.splice(1, 1, "Bananas", "Eggs")
console.log(list)
list.pop()
console.log(list)
list.sort()
console.log(list)
console.log(list.indexOf("Milk"))
list.splice(1, 0, "Carrots", "Lettuce")
console.log(list)
let newList=["Juice", "Pop"]
console.log(list.concat(newList).concat(newList))