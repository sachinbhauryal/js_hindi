const marval_heros = ["ironMan","spiderMan","blackPanther"]
const dc_heros= ["superMan","flash","batMan"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const mix_heroes = marval_heros.concat(dc_heros)
// console.log(mix_heroes)


// this is spread operation used to seperate every element 
// const all_heros = [...marval_heros,...dc_heros]
// console.log(all_heros);


// .flat is used to spred every element 
const another_array = [1,2,3,[4,5,6],7,[8,9,[3,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("sachin"));
console.log(Array.from("sachin"));
console.log(Array.from({name : "sachin"})); // Intresting case 

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1,score2,score3));
// .of is used to make array from different element 
