let mySet = new Set();

mySet.add(100);
mySet.add(150);
mySet.add(200);
mySet.add(100);  // Adding duplicate value, should not be added to the set 


console.log(mySet);
console.log(mySet.has(100));
console.log(mySet.size);

mySet.delete(100);
console.log(mySet);


let myArray = Array.from(mySet);

console.log(myArray);