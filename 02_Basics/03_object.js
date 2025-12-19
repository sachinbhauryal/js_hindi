// Singletone
// Object.create

// object literals

const mySmb = Symbol("Key1");


const jsuser = {
    name : "Sachin",
    "full name" : "sachin bhauryal",
    [mySmb] : "Key1",
    age: 18,
    location:"haldwani",
    email :"sachin@google.com",
    isloggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySmb]);

// Changes
// jsuser.email = "sachin@chatgpt.com"
// console.log(jsuser["email"]);

// allow no changes 
// Object.freeze(jsuser)
// jsuser.email = "prosachin@google.com"

// console.log(jsuser["email"]);
// console.log(jsuser);


jsuser.greeting_one = function(){
    console.log("hello JS users"); 
}

jsuser.greeting_two = function(){
    console.log(`hello JS users ${this.name}`); 
    console.log(`hello JS users ${this["full name"]}`); 
}

console.log(jsuser.greeting_one());
console.log(jsuser.greeting_two());

// --------------------------------------------------------------





