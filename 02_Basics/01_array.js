// Array 

const myarr = [0,1,2,3,4,5]
const myheros = ["ironMan","superMan","spiderMan"]

// console.log(myarr[0]);

const myarr2 = new Array(8,1,534,24,66)
// console.log(myarr2[3]);

// ARRAY METHODS 

// myarr.push(6)
// myarr.push(7)
// console.log(myarr);

// myarr.pop()
// myarr.pop()
// console.log(myarr);

// myarr.unshift(9)      // add 9 at stating
// console.log(myarr);

// myarr.shift()  // shift remove the zero element of the array
// myarr.shift()
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));   // find the location of the paricular element 

// ------------------------------------------------------------
// const newArray = myarr.join()
// console.log(myarr)
// console.log(typeof(myarr));

// console.log(newArray);
// console.log(typeof(newArray));

// when you join two array the type of the array is converted to string 


// ----------------------------------------------------------
// Slice /Splice

console.log("A", myarr);

//  In slice there is no changes in the original array 

const myn1 = myarr.slice(1,3)
console.log("b",myarr)
console.log("b",myn1);

// In splice there is changes in the original array

const myn2 = myarr.splice(1,3)
console.log("c",myarr)
console.log("c",myn2);



