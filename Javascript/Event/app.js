const elementHead = document.getElementById("head-1");
const inputElement = document.getElementById("name");
const counter = document.getElementById("counter");

inputElement.onfocus = function(){
    console.log("Focused on input!");
};



// elementHead.onclick = function(){
//     console.log("Bana tıkladın");
// }

let count = 0;

elementHead.addEventListener("click", function(){
    count++;
    console.log(count);
    // counter.appendChild(document.createTextNode(count));
    counter.textContent = count;
});

