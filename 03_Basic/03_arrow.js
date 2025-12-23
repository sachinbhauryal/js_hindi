const user = {
    username :"sachin",
    price : 999,
    
    welcomeMessage: function(){
         console.log(`${this.username}, Welcome to website`);
         console.log(this);            //this will talk about current context
         
    }
}

// user.welcomeMessage()
// user.username = "amit"
// user.welcomeMessage()

// console.log(this);           // here it will return the empty object
                               // but when we run this is browser it will show window 

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let user = "sachin"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let user = "sachin"
    console.log(this.username);
}
// chai()

//++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++
// const addtwo=(num1,num2) => {
//     return num1 +num2
// }

// const addtwo=(num1,num2) => num1 +num2

// const addtwo=(num1,num2) => (num1 +num2)
// console.log(addtwo(4,2))

// const addtwo = (num1,num2) => ({username : "sachin"})
// console.log(addtwo(3,4)); 

// const myarray = [2,5,3,7]
// myarray.forEach(() => ())