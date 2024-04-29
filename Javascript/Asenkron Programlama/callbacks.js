// function prc1(callback){
//     setTimeout(function(){
//         console.log("İşlem 1");
//         callback();
//     },5000);
// }
// function prc2(){
//     setTimeout(function(){
//         console.log("İşlem 2");
//     },2000);
// }

// prc1(prc2);

const students = ["Affan","Zeynep","İrem"];

function addSTD(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Öğrenci eklendi");
        callback();
    },2000);
}
function getAllSTD(){
    setTimeout(function(){
        students.forEach(function(std){
            console.log(std)
        });
    },1000);
}

addSTD("Ahmet",getAllSTD);
// getAllSTD();