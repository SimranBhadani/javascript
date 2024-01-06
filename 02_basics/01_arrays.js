// array

const myArr=[0,1,2,3,4,5]

const mysubject=["Dbms","Networking","Os","DSA"]

const myArr2=new Array(12,13,45,63)
// console.log(myArr[3]);
// console.log(mysubject[2]);
// console.log(myArr2[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(96) // add value at start of array
// myArr.shift()

// console.log(myArr.includes(6)); // false (boolean)
// console.log(myArr.indexOf(36)); // gives -1

const newArr=myArr.join() // join => converts array into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string

// slice , splice

console.log("A",myArr);

const method1=myArr.slice(1,4) // slice => break krta h array ko index-1 tak but original array same hota hai o/p=> 1,2,3
console.log(method1);

console.log("B",myArr);

const method2=myArr.splice(1,4) // splice => break krta h array ko index tak and 
console.log(method2);           //original array se spliced element ko remove kr deta o/p => 1,2,3,4
                                // new array= 0,5
console.log("C",myArr);


