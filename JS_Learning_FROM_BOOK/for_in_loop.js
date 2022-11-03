const car = {
model: "Golf",
make: "Volkswagen",
year: 1999,
color: "black",
}
for (const prop in car){
    console.log(car[prop])
}