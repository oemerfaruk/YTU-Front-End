localStorage.setItem("name", "Ömer Faruk");
localStorage.setItem("age", "26");

let array = new Array(1,2,3,4,5,"Ömer Faruk")
// localStorage.setItem("item", array);
let value = localStorage.getItem("item");
console.log(value, typeof value);



localStorage.setItem("item2", JSON.stringify(array));
let value2 = JSON.parse(localStorage.getItem("item2"));

console.log(value2, typeof value2);


