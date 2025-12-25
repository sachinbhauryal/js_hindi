// for loop
n=10
for (let i = 0; i < n+1; i++) {
    // console.log(i);
    if (n=5) {
        // console.log("5 is the best number")
    }
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for(let j = 1; j <= 10;j++){
// console.log(`inner loop value ${j}`)
// console.log(i+' * '+j+' = '+i*j);
    } 
}

let hero = ["superMan" , "spiderMan", "batMan", "Ironman"]

for(let i = 0; i<hero.length;i++){
    console.log(hero[i]);
    
}

//break and continue 

// for (let i = 0; i <= 10; i++) {
//     if (i==5) {
//         console.log("5 is detected");  
//         break
//     }
//     console.log(`value of i is ${i}`);
// }


for (let i = 0; i <= 10; i++) {
    if (i==5) {
        // console.log("5 is detected");  
        continue
    }
    console.log(`value of i is ${i}`);
}