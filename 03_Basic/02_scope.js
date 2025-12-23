// var c = 399

let a = 400

// the element inside the curly braces scope is only inside the braces they  cannot be exced outside there scope.
// in this case the value of b cannot be exceed outside the scope.
 
if(true){
    let a = 10
const b = 20
console.log("Inner :",a);
}

console.log( "Outer :",a);





