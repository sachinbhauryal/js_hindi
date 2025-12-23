
function sayMyName(){
    console.log("S");
     console.log("S");
     console.log("A");
     console.log("C");
     console.log("H");
     console.log("I");
     console.log("N");
}

// sayMyName()

// function addTwoNumber(num1, num2){
// console.log(num1+num2);
// }
// addTwoNumber(5,5)

function addTwoNumber(num1, num2){
// let result = num1 + num2
// console.log("Sachin");
// return result

// return num1+num2
}
const result = addTwoNumber(2,3)

// console.log("Result :",result);

function loginUserMessage(username){
    if(username===undefined){
    //    console.log("please enter the username.");
    //    return
    }
    // return `${username} just logged in`
}
// console.log(loginUserMessage("Sachin"));

// console.log(loginUserMessage());


// ----------------------------------------------------------------

// here we has use (rest) which is used to take multiple value in the array when the size is unsertain .
 
function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,300,400))


const user = {
username : "Hitesh",
price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
handleObject(user)


handleObject({
    username : "Sachin",
    price : 399
})

