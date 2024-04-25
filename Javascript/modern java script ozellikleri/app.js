// template literals

// const name = "Omer Faruk"
// const message = "Merhaba, " + name + "." + "Dersmize hos geldinz. Iyi Dersler"
// console.log(message)


// const user = {
//     name : "Omer Faruk",
//     age : 25,
//     job : "Developer"
// }

// const message = `Merhaba, ${user.name}. Siz ${user.age} yasinda bir insansiniz. Mesleginiz ise ${user.job}`

// console.log(message)

// Destructuring Assignment
// const user = {
//     name : "Omer Faruk",
//     age : 25,
//     job : "Developer"
// }
// const {name, age, job} = user

// console.log(name)
// console.log(age)

// const numbers = [1,2,3];
// const [one, two, three] = numbers;
// console.log(one,two,three)

// Arrow Function

// const numbers = [1,2,3];
// const squares = numbers.map(number => number * number)
// console.log(squares)

// Spread & Rest

// Spread
const nums1 = [1,2,3];
const nums2 = [...nums1,4,5,6];
console.log(nums2)

// Rest
function sum(...numbers){
    return numbers.reduce((total,number) => total + number, 0)
}
console.log(sum(1,2,3,4));