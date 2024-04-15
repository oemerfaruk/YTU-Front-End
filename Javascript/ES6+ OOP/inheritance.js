class Person{ // Super class, base class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    increaseAge(){
        return this.age ++;
    }
}

class Student extends Person{ // subclass, child class , derived class
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }

    // override
    increaseAge(){
        return this.age = this.age + 2;
    }
}

const std1 = new Student("Ömer", 26, "YTÜ");
console.log(std1)
std1.increaseAge();
console.log(std1);