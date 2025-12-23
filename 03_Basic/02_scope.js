// var c = 399

let a = 400

// the element inside the curly braces scope is only inside the braces they  cannot be exced outside there scope.
// in this case the value of b cannot be exceed outside the scope.
 
if(true){
    let a = 10
const b = 20
// console.log("Inner :",a);
}

// console.log( "Outer :",a);

// ----------------------NESTED SCOPE ----------------------------
function one(){
    const username = "sachin"
    function two(){
        const website = "Youtube"
        console.log(username);  
    }
    // console.log(website);          // this show error because the website is called outside thescope of function two. 
    
    two()
}
// one()

if (true) {
    const username = "sachin"
    if (username === "sachin") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);                // ERROR
}
// console.log(username);                   // ERROR


// ++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++


console.log(addOne(5))

function addOne(num){
    return num + 1
}

// while declaring function with the help of variable we can put it before the function.but in case of whwn we are declaring it without varaible we can put it before function.


const addTwo = function(num){
    return num+2
}
// console.log(addTwo(5))          