// Primitive data type :-
// 7 types :- string,Number,boolean ,null, undefined,symbol,BigInt;

const score = 100
const scorevalue = 203.3
const IsLoggedIn = true
const outsideTemp = null
const BigInt = 342423524353n
let useremail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

console.table([typeof(score),typeof(scorevalue),typeof(IsLoggedIn),typeof(outsideTemp),typeof(BigInt),typeof(useremail),typeof(id)]);

/*
100 => number 
203.3 => number
IsLoggedIn => boolean
null => object
bigint => bigint
undefined => undefined
symbol => symbol
*/

// ------------------------------------------------------------------

// reference type / Non-Primitive 
// Array , Object , Functions 

const hero = ["antMan","spiderMan","IronMan"]
// console.log(typeof(hero));  // object

let obj1 = {
    name:"sachin",
    age :21,
}
// console.log(typeof(obj1)); //object

  const firstFunction = function(){
    console.log("first function");
  }
// console.log(typeof(firstFunction)); //function-object


/*
Array =>object
Object =>object
function =>function-object

*/