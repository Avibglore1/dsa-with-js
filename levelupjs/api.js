let person={
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st street",
        city: "San Jose",
        state: "LA",
        country: "USA"
    }
}

// let person2 = {...person};
// console.log(person);
// console.log("'''''''''''''''''''''''");
// console.log(person2);
// person2.address.city = "jsr";
// console.log(person);
// console.log("'''''''''''''''''''''''");
// console.log(person2);

// only one level of copy can be done.

// polyfill for spread;

const keys = Object.entries(person);
// console.log(keys)
const person2 = {};
for (let i=0;i<keys.length;i++){
    const [key,value] = keys[i];
    person2[key] = value;
}
console.log(person);
console.log("'''''''''''''''''''");
console.log(person2);
