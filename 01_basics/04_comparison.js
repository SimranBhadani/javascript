// comparison between same datatype 

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// comparison between different datatype value

console.log("2">1); // here 2 is a string but conveted into Number during comparison gives o/p => true
console.log("2"==1);

//comparison of null(avoid these types of comparison so inconsistent)

console.log(null>0);                                                               
console.log(null>=0);// gives o/p => true
console.log(null==0);

// comparison of undefined

console.log(undefined>0);
console.log(undefined>=0);      
console.log(undefined==0);

// ===
console.log("2"==2);// true
console.log("2"===2);// false => it strictly checks the datatype during comparison