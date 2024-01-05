// DATES

let myDate=new Date()
console.log(typeof myDate); //=> date is an object
console.log(myDate);// same
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());//same
console.log(myDate.toJSON());// same
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

//let createdDate=new Date(2024,0,16); // date months-> start from 0
// let createdDate=new Date(2024,0,16,9,11);
//let createdDate=new Date("2024-01-05"); // here month starts from 1
let createdDate=new Date("01-05-2024");
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleDateString());
console.log(createdDate.toLocaleString());

let myTimeStamp= Date.now(); // Date.now => current time

console.log(myTimeStamp); // gives time in milliseconds
console.log(createdDate.getTime()); // gives in ms

// but if we want in seconds divide by 1000

console.log(Date.now()/1000); // gives current time in seconds but gives in decimal

// to remove decimal use Math.floor
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getDay()); // starts from 1- mon, 2- tue
console.log(newDate.getFullYear());
console.log(newDate.getTime()); // gives in ms