class Request {
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }


    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({data}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })   
    }
    
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({data}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    })
    }

    delete(url){
        return new Promise((resolve,reject) =>{
            fetch(url, {
                method: 'DELETE',
            })
            .then(response => resolve("Başarılı bir şekilde silindi..."))
            .catch(err => reject(err));
        })
        
    }




}


const request = new Request();

// promise kullanımı öncesi bazı örnekler

// request.get("examplexyz.json") // 404 - Not Found
// request.get("example.json")




// promise kullanımı


// get
// let posts;
// request.get("https://jsonplaceholder.typicode.com/posts")
// .then(posts => {
//     console.log(posts)
// })
// .catch(err => console.log(err))


// Post
// let newTodos;

// request.post("https://jsonplaceholder.typicode.com/todos", {userID:7,title:"Javascript dersi",completed:false})
// .then(newTodos => console.log(newTodos))
// .catch(err => console.log(err))


// Put
// let newTodos;
// request.put("https://jsonplaceholder.typicode.com/todos/186", {userID:7,title:"Javascript dersi",completed:false})
// .then(newTodos => console.log(newTodos))
// .catch(err => console.log(err))


// Delete
 request.delete("https://jsonplaceholder.typicode.com/todos/186")
 .then(message => console.log(message))
 .catch(err => console.log(err))
