// const coding = ["js","ruby","java","python","c++"]


// for each loop does not return any thing 

// const answer = coding.forEach( value => {
//    return value
// });
// console.log(answer);

const myNum  = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num) => num > 5)
// console.log(newNums);


// const newNum = []
// myNum.forEach((num)=> {
//     if(num>4){
//         newNum.push(num)
//     }
// });
// console.log(newNum);

const book = [
    {title : 'Book One', genra : 'fiction',publish : 1981,edition: 2004},
    {title : 'Book Two', genra : 'Non-fiction',publish : 1992,edition: 2008},
    {title : 'Book Three', genra : 'History',publish : 1999,edition: 2007},
    {title : 'Book Four', genra : 'Non-fiction',publish : 1989,edition: 2010},
    {title : 'Book Five', genra : 'Science',publish : 2009,edition: 2014},
    {title : 'Book Six', genra : 'fiction',publish : 1987,edition: 2010},
    {title : 'Book Seven', genra : 'History',publish : 1961,edition: 1994},
    {title : 'Book Eight', genra : 'fiction',publish : 1999,edition: 2024},
    {title : 'Book Nine', genra : 'Humanitiy',publish : 2009,edition: 2025},
]

let userBooks = book.filter((bk) => bk.genra === "History")
userBooks = book.filter((bk) => bk.publish >2000)
userBooks = book.filter((bk) => bk.edition >2000)
let mix = book.filter((mi) => mi.genra ==="Non-fiction" && mi.edition >2000 )

// console.log(userBooks);
console.log(mix);

