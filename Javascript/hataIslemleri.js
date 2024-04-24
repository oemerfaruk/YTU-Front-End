function checkNumber(num){
    if(isNaN(num)){
        throw new Error("It is not a number...")
    }
    return num;
}

// console.log(checkNumber('a'));



try{
    console.log('try bloku');
    let element = document.getElementById('id')
    element.innerText = 'Merhaba';
    console.log(checkNumber('a'));
}catch(Error){
    console.log("Catch bloku calisti\nHata:", Error)
}finally{
    console.log("Ne olursa olsun calisagim")
}

// let element = document.getElementById('id')
//     element.innerText = 'Merhaba';