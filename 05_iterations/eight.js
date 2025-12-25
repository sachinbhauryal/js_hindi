// +++++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++
const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(accumulater,currentvalue) {
// console.log(`accumulater : ${accumulater} and currentValue : ${currentvalue}`)
// return accumulater + currentvalue 
// },0)

// console.log(myTotal);


// const myTotal =myNum.reduce((acc,currnv) => {
// console.log(`accumulater :${acc} and currentvalue :${currnv}`);
// return acc + currnv
// },0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "data Science course",
        price : 12999
    },
    {
        itemName : "MObile Development course",
        price : 7999
    },
]
const priceToPay = shoppingCart.reduce((acc,item) => {
    console.log(`accumulated : ${acc} and item price :${item.price}`);

      return acc + item.price
    },0)

console.log(priceToPay);
