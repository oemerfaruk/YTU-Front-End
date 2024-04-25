// Fonksiyonu arguman olarak kullanma


const numbers = [1,2,3,4,5];
const doubled = numbers.map(x => x * 2);

console.log(doubled);


// Fonksiyonlari donus degeri olarak kullanma

function multiplyBy(multiplier){
    return function(number){
        return number * multiplier;
    };
};

const double = multiplyBy(2);
const triple = multiplyBy(3);


console.log(double(5));
console.log(triple(5));