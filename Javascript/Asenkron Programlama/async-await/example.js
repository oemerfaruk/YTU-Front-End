class Request {
    async get(url){
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }


    async post(url,data){
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const responseData = await response.json();
        return responseData;

    }
    
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({data}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseData = await response.json();
        return responseData;


    }

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const responseData = await "Başarılı bir şekilde silindi...";
        return responseData;
        
    }




}


const request = new Request();

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
//  request.delete("https://jsonplaceholder.typicode.com/todos/186")
//  .then(message => console.log(message))
//  .catch(err => console.log(err))
