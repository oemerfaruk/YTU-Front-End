// JSON - JavaScript Object Notation

let text = {
    "course":"Front end",
    "members":[
        {"name":"Ömer Faru", "surname":"Aydın"},
        {"name":"Ömer Faru", "surname":"Aydın"}
    ]
}


console.log(typeof text);

const obj = JSON.stringify(text);
console.log(obj);
console.log(typeof obj);



console.log(JSON.parse(obj));
console.log(typeof JSON.parse(obj));
