// if
// <,>,<=,>=,==,===,!=

// if (2=="2") {
//     console.log("Executed");
// }

// if (2==="2") {
//     console.log("Executed");
// }

// const temp = 55
// if (temp < 50) {
//     console.log("temperature is less than 50");
// }
// else{console.log("temperature is greater tha 50");}

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power : ${power}`);         // this is out of scope 


const balance =1000

// if (balance>500) console.log("test"), console.log("test 2");

const userLoggedIn = true;
const debitCard = true;
const googleLogin = true;
const emailLoggedIn = false;

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (googleLogin || emailLoggedIn) {
    console.log("User have logged in ");
    
}