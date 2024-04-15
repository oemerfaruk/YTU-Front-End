// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.increaseAge = function (){
//         return this.age ++;
//     }
// }

// function Student(name, age, school){
//     Person.call(this, name, age);
//     this.school = school;
// }

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    increaseAge(){
        return this.age ++;
    }
}

const person1 = new Person("ömer",26);
console.log(person1);

class  Matematik {
    square(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }
}
Matematik.square(9);
Matematik.cube(21);