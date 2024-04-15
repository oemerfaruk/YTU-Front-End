function Person(name, age){
    this.name = name;
    this.age = age;

    this.increaseAge = function (){
        return this.age ++;
    }
}

function Student(name, age, school){
    Person.call(this, name, age);
    this.school = school;
}
Student.prototype.hello = function(){
    console.log("Merhaba, ben bir öğrenciyim.")
}

// override
Student.prototype.increaseAge = function(){
    this.age = age + 2;
}





const std1 = new Student("Ömer Faruk", 26, "YTU");
console.log(std1);
// console.log(std1);
std1.increaseAge();
console.log(std1);

// std1.hello();

