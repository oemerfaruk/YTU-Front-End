function square(number){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number ** 2)
            }
            else{
                reject(new Error("Sayı girmelisiniz..."))
            }
        },3000);
    });
}

square(5)
.then(result => {
    console.log(result);
    return result / result;
}).then(result => console.log(result))
.catch(err => console.error(err));