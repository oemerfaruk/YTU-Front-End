// ES6+ Öncesi

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " yaş: " + this.age);
// }

// const person1 = new Person("Ömer Faruk", 26);

// console.log(person1);



// Es6+ Sonrası

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " yaş: " + this.age);
    }
}

const person1 = new Person("Ömer Faruk", 26);

console.log(person1);
person1.showInfos();