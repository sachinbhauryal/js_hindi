// Immediately invoke function Expression (IIFE)
(
function chai(){                    // Nammed IIFE
    console.log(`DB Connected`);  
})();

// (function aurCode(){
//     console.log(`DB Connected two`);
// })();

// ( () => {
//     console.log(`DB Connected three `);
// })();

((name)=>                                  //unnamed IIEF
console.log(`DB connected four ${name}`)
)("sachin")