const marvel_heros=["ironman","spiderman","thor"]
const dc_heros=["batman","flash","superman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros); // should store in new variable if concat is done
console.log(all_heros);

const another_array=[0,1,2,3,[4,5,6],[7,8,[9,10],11]];
const real_another_array=another_array.flat(Infinity) // flat convert into one single array
console.log(real_another_array);

console.log(Array.isArray("simran"));
console.log(Array.from("simran"));
console.log(Array.from({name:"simran"})); // gives empty array => can't decide either convert key or value (INTERVIEW)


let marks1=90
let marks2= 96
let marks3= 85
let marks4=75
let marks5 =99

console.log(Array.of(marks1,marks2,marks3,marks4,marks5));
console.log(Array.from("123562"))

