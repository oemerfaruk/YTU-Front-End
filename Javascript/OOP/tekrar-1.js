// let obje = {
//     name : "Ömer Faruk",
//     age : 26,

//     increaseAge: function (){
//         return this.age = this.age + 1;
//     }
// }

// console.log(obje);
// obje.increaseAge();
// console.log(obje);

function Person(name, age){
    this.name = name;
    this.age = age;

    this.increaseAge = function (){
        return this.age ++;
    }
}
Person.prototype.sayMyName = function(){
    console.log("İsim: " + this.name);
}


// const person1 = new Person("Ömer Faruk", 26);
// console.log(person1);
// person1.sayMyName();


// const person2 = Object.create(Person);
// person2.name = "Faruk";
// person2.age = 26;

// console.log(person2);

