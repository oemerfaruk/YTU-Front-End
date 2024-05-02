async function hello(name){
    return "Hello " + name;
}

hello("Ömer").then(response => console.log(response));

// ----------------------

// async function test(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Merhaba")
//         },5000);
//     });

//     let response = await promise;

//     console.log(response);
// }

// test()

// ----------------------

// async function test(data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "number"){
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("Lütfen sayı girin...."))
//             }
//         }, 5000);
//     });


//     const response = await promise;

//     return response;
// }


// test("100")
// .then(data => console.log(data))
// .catch(err => console.log(err))

// ----------------------

// async function getUsers(url){
//     const response = await fetch(url);

//     const data = await response.json();
//     return data;
// }


// getUsers("users.json")
// .then(result => console.log(result))















