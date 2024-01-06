//const tinderUser = new Object() // singleton object creation using constructor // same
const tinderUser = {} //same // not singleton

tinderUser.id = "123abc"
tinderUser.name = "Rocky"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "someone@gamil.com",
    fullname: {
        Userfullname: {
            firstname: "Simran",
            lastname: "Bhadani"
        }
    }
}
//console.log(regularUser.fullname.Userfullname.lastname);// accessing object inside object

// Merge object

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2) // {}=>(empty object) acts as a target where merge is happening and obj1 and obj2 as source
const obj3 = { ...obj1, ...obj2 } // used mostly (spread object)
//console.log(obj3);

const Users = [
    {
        email: "sim@gmail.com",
        id: 2
    },

    {
        email: "simii@gmail.com",
        id: 6
    },

    {
        email: "simoo@gmail.com",
        id: 9
    },
]
// console.log(Users[2].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // gives in an array format => can be used for looping
// console.log(Object.values(tinderUser));// gives values of keys
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // boolean result

const Course = {
    coursename: "Javascript",
    price: "699",
    courseInstructor: "Rakesh"
}
//console.log(Course.courseInstructor);

//other way access object data

const { courseInstructor: Instructor } = Course // Instructor => given other name for courseInstructor (Object Destructure)
//console.log(courseInstructor);     // {} => DESTRUCTURING
console.log(Instructor);

// JSON 

// {
//     "name": "simran",
//     "age": "21",
//      role": "developer" 
// }




