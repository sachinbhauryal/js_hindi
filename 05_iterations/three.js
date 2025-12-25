// for of

// ["", "","",""]
// [{},{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

// const hero = ["spiderman","superman","batman","flash","hulk"]
// for (const value of hero) {
//     console.log(value)
// }

// const greeting = "hello sachin!"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }

// -----------------------Maps----------------------------------

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,`:-`,value);
}


const myobject ={
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key,value] of myobject) {         \\ this will not work here instead of (forof) we have to use (forin).
//   console.log(key,`:-`, value);
// }