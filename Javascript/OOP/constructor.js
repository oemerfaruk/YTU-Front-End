// let myObj = {  // object literal
//     name:"Ömer Faruk",
//     age: 26,

//     hello: function (){
//         console.log("Hello There!");
//     }
// };

// console.log(myObj);

// myObj.hello();


function Student(name, age, department){
    this.name = name;
    this.age = age;
    this.department = department;

    // console.log(this);

    this.showInfo = function(){
        console.log("İsim: " + this.name + " Yaşı: " + this.age + " Bölümü: " + this.department);
    }
}


const student1 = new Student("Ömer Faruk", 26, "Physics");
const student2 = new Student("Muhammed Halil", 23, "Harita Mühendisliği");

student1.showInfo();



// console.log(student1);
// console.log(student2);

// console.log(this);
