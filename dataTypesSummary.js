// two types of datatypes

// Primitive: 7 types
// String, Number, Boolean, Symbol, null, undefined, BigInt

const name="simran"// returntype->String
const score = 500  // returntype-> number
const scorevalue = 100.5

const isLoggedIn = false// returntype-> boolean
const outsideTemp = null // returntype-> object
let userEmail; // returntype-> undefined

const id = Symbol('123')// Symbol => assign unique value
const anotherId = Symbol('123')

const bigNumber=2325639741256333352n // returntype-> bigint
console.log(id);
console.log(anotherId);
console.log(id==anotherId);// not same
console.log(userEmail);
console.log(typeof bigNumber);


// Reference(Non-primitive)
// Array,Object,Function => datatype always function

const heros=[ "superman", "spiderman", "doga" ];// array->returntype->object

let myobj = {
    name:"batman", // object {everything inside}
    age:50,
}

const myFunction= function(){
    console.log("hello");
}

console.log(typeof heros);
