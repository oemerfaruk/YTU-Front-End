// const myObj = {
//     test1:function(){
//         console.log("test 1 fonksiyonu");
//     },
//     test2:function(){
//         console.log("test 2 fonksiyonu");
//     }
// }

// console.log(myObj);

// const std = Object.create(myObj);
// std.name = "Ömer";
// std.age = 26;

// console.log(std);

// std.test1();

//-----------


function Person(){

}
Person.prototype.test1 = function(){
    console.log("test 1 fonksiyonu");
}
Person.prototype.test2 = function(){
    console.log("test 2 fonksiyonu");
}


function Student(name, age){
    this.name = name;
    this.age = age;
}
Student.prototype = Object.create(Person.prototype);

const student1 = new Student("Ömer", 26);

console.log(student1);