// function merhaba(){
//     console.log("Merhaba Dünya!")
// };

// function selamla(){
//     return "Selam Dünya!";
// };

// merhaba(); // function call
// console.log(selamla());


// function merhaba(name = "dünya"){
//     console.log("Merhaba " + name + "!");
// };

// merhaba("Ömer");

// function toplam(a, b){
//     return a + b;
// };

// result = toplam(3,5);

// console.log(result)


// const toplam = function(a, b){
//     return a + b;
// };

// console.log(toplam(3,5));

// Immediately Involed Function Expression (IIFE)

// (function(name){
//     console.log("Merhaba " + name);
// })("Dünya!")

let result;

function tri_recursion(k){
    if (k > 0){
        result = k + tri_recursion(k - 1);
        console.log(result);
    }
    else{
        result = 0
    }

    return result;
};

console.log(tri_recursion(6));