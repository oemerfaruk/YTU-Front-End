
const person = {
    name: "Ömer Faruk",
    

    getName : function(){
        console.log(this);
    }.bind(this),

    getNameArrow : () => {
        console.log(this);
    }
    

}



person.getName();
person.getNameArrow();