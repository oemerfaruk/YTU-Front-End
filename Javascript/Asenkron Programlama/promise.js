function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                // Olumlu
                resolve(data);
            }
            else{
                reject(new Error("string bir ifade girmelisiniz..."));
            }
        },3000);
    });
}

// getData(26).then(function(response){
//     console.log("Gelen değer: ", response);
// }).catch(function(err){
//     console.error(err);
// });

getData(26)
.then(response => console.log("Gelen değer: ", response))
.catch(err => console.error(err));