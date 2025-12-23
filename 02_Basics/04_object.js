// const   tinderUser = new Object(),
const tinderUser = {}

tinderUser.id = "323abs"
tinderUser.name = "sachin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "sachin@google.com",
    name:{
         fullName:{
            firstName: "Sachin" ,
            lastName : "Bhauryal"
         }
    }
}
// console.log(regularUser.name.fullName.lastName);

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}
const obj3 = { 5:"a",6:"b"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4);


// here we have use spread .easy and simple to emplement 
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))  // make the key value pair in the form of array 

// console.log(tinderUser.hasOwnProperty("id"));

// -----------------------------------------------------

const course = {
    coursename : "JS in Hindi",
    price : 999,
    CourseInstructor : "Sachin"
}
// course.CourseInstructor
// console.log(course.CourseInstructor);

// const{CourseInstructor}=course
// console.log(CourseInstructor);

//  if the value name is long you can rename it .
const{CourseInstructor:instructor}=course
console.log(instructor);

// -----------------------------API----------------------------

// {
//     "Name":"sachin",
//     "courseName":"js in hindi",
//     "Price": "free"
// }

// API can also be in form of array

[
    {},
    {},
    {}
]