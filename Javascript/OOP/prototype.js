function Student(name,age){
    this.name = name;
    this.age = age;

    // this.showfInfo = function(){
    //     console.log("İsim: " + this.name + " yaşı: "+ this.age);
    // }
    console.log(this);
}
Student.prototype.showInfo = function(){
    console.log("İsim: " + this.name + " yaşı: "+ this.age);
}


const std1 = new Student("Ömer Faruk", 26);
std1.showInfo();
