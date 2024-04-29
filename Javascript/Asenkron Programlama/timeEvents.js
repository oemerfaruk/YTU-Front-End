// set timeout

// setTimeout(function(){
//     console.log("Merhaba Dünya!");
// },5000);

// setTimeout(function(){
//     console.log("Güle güle!");
// },2000);


// set Interval
let i = 0;

let counter = setInterval(function(){
    i++;
    console.log("Number: ", i);
},1000)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(counter);
})

