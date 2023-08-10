
// const user = {
//     name: 'John',
//     address: {
//         street: '123 Main St',
//         city: 'Exampleville',
//         country: 'USA'
//     }
// };
// const abc = user.address.phoneNumber
// console.log(abc);

// const country = user?.address?.country;
// console.log(country);

// const phoneNumber = user?.phoneNumber;
// console.log(phoneNumber);


const user = {
    name: 'umair',
    age: 20,
    address: {
        street: 7,
        house: 10,
        city:{
            name:'lhr'
        }
    },
    marks: 89
}

// if (user.address !== undefined) {
//     if (user.address.city) {
//     if (user.address.city.name !== undefined) {
//         console.log(user);
//     }
//     else {
//         console.log('city not found');
//     }
// }
// } else {
//     console.log('city not found');
// }


// if (user.address && user.address.city && user.address.city.name) {
//     console.log(user);
// }
// else{
//     console.log('not defined');
// }


// if (user.address?.city?.name) {
//     console.log(user);
// } else {
//     console.log('not defined');
// }

console.log(user.address?.city?.name);
// const abc = 0
// const ab = Boolean(abc)
// console.log(ab);