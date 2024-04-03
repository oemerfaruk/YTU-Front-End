const obje1 = {
    number1:100,
    number2:200
}

const obje2 = {
    number1:50,
    number2:75
}


function addNumbers(number3, number4){
    // console.log(this.number1);

    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers.call(obje1, 12, 35);
// addNumbers.call(obje2, 12, 35);

// addNumbers.apply(obje1,[50,75]);
// addNumbers.apply(obje2,[50,75]);


const copyFunc1 = addNumbers.bind(obje1);
const copyFunc2 = addNumbers.bind(obje2);

copyFunc1(100,200);
copyFunc2(100,200);