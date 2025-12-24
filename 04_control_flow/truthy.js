const userEmail ="sachin@03.com"
if (userEmail) {
    console.log("got user email");
}else{
    console.log("dont have user email"); 
}


// falsy value 
// false,0,-0,BigInt 0n, "" , null, undefined, NaN
 
// remaining all are the truthy value 
// some suprising truthy value are 
// -> "0",'false', " " , {} empty object,[] empty array, function(){} empty function

const Isarray = []

if (Isarray . length === 0) {
    console.log("Array is empty");
}

const emptyobj ={}
if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
    
}

// Nullish Coleshing operator (??) : null Undefined 

let val1 ;
// val1 = 5?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1);

// +++++++++++++++ Terniary operator +++++++++++++++++++++++++++++++
// condition ? true :false 

const icecream = 100
icecream <= 80 ? console.log("less than 80") : console.log("greater than 80");

