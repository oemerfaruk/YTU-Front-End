// function createCounter(){
//     let count = 0;
//     return function(){
//         count ++;
//         return count;
//     };
// }


// const counter = createCounter();

// console.log(counter());
// console.log(counter());

//------------


function createText(text){
    return{
        getText: function(){return text;},
        setText: function(newText){text = newText}
    };
}


const text = createText("Hello");
console.log(text.getText());
text.setText("Hi");
console.log(text.getText());