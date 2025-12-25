
// +++++++++++++++++++++++For In Loop +++++++++++++++++++++++++++++++
const myobject ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift :'swift by apple'
}
for (const key in myobject) {
    // console.log(key);
    // console.log(myobject[key]);
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming =["js","py","rb","java","cpp"]

for (const language in programming) {
console.log(programming[language]);
}