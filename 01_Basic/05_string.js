const name = "sachin "
const repoCount =50

// this is outdated 
// console.log(name + repoCount + " value");

//  new syntax is 
// console.log(`Hello my name is ${name}and my repo count is ${repoCount}`)

// -----------------------------------------------------------------------

const gameName = new String('sachin-fc-com')
/*

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('f'));
*/


/*
const newstring = gameName.substring(0,6)
console.log(newstring);

const anoterString = gameName.slice(1,-2)
console.log(anoterString);

const newStringOne = "   hitesh   ."
console.log(newStringOne);
console.log(newStringOne.trim());
*/
const url = "https://sachin.com/sachin%20bhauryal"
console.log(url.replace('%20','_'));

console.log(url.includes("sachin"));

console.log(gameName.split('-'));
