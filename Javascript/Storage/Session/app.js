const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
const search = document.querySelector("#search");

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");
const searchkey = document.querySelector("#searchkey");


add.addEventListener("click",addItem);
del.addEventListener("click", removeItem);
clear.addEventListener("click",clearItems);
search.addEventListener("click",searchItem);



function addItem(e){
    e.preventDefault();
    sessionStorage.setItem(addKey.value, addValue.value);
};
function removeItem(e){
    e.preventDefault();
    sessionStorage.removeItem(deletekey.value);
};
function clearItems(e){
    e.preventDefault();
    sessionStorage.clear();
};
function searchItem(e){
    e.preventDefault();

    let result = sessionStorage.getItem(searchkey.value);

    if (result === null){
        console.log("Aradığınız anahtar yok")
    }
    else{
        console.log(result)
    }
};



// let value = sessionStorage.getItem("");

// console.log(value)



// e
// e.type
// e.target
// e.preventDefault()