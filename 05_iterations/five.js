// ++++++++++++++++++++For Each Loop ++++++++++++++++++++++++++++++++++++

// const coding = ["js","ruby","java","python","c++"]


// coding.forEach( function(val) {
//     console.log(val);
// });


// coding.forEach(value => {
//     console.log(value); 
// });


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index) => {
//     console.log(item,index);
// });

const coding = [
    {
        languageName : "javascript",
        languageFileName :  "js"
    },
    {
        languageName : "Python",
        languageFileName :  "py"
    },
    {
        languageName : "java",
        languageFileName :  "java"
    }
]
coding.forEach((item) => {
    console.log(item.languageName)
});