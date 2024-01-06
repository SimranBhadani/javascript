// singleton => if object made from constructor
// if made from literals => not singleton



// object.create // constructor method to create object (singleton object)
// object literals => OBJECT DECLARATION

const mySym = Symbol('key1') // Symbol declared outside
const JsUser = {
    name: "Simran",
    "full name": "Simran Bhadani",// value => string, array,number,boolean,array,object, function
    [mySym]: "mykey1",  // symbol will be declared in square bracket , if written like mysym(it act as string) (INTERVIEW)                          
    age: 21,
    location: "Kolkata",
    email: "simran@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email); // generally access using dot but in some cases square bracket needed
console.log(JsUser["email"]);
//console.log(JsUser.full name); // can't access like this since full name is in "" in object declaration
console.log(JsUser["full name"]); // can access by using square bracket only
console.log(JsUser[mySym]); // acess using square bracket only
console.log(typeof JsUser[mySym]);//o/p =>  string (contain string value) 

JsUser.location = "Mumbai" // can make changes like this using dot(.)
console.log(JsUser.location);
//Object.freeze(JsUser) // freeze the values object literals can't make any changes.
JsUser.location = "Chennai"
JsUser.isLoggedIn = true
//console.log(JsUser);

JsUser.greeting = function (){
    console.log("hello Js user");
} 

JsUser.greetingNew = function (){
    console.log(`Hello jsuser ${this.name}`);// this => used to access the properties of referenced object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingNew());




