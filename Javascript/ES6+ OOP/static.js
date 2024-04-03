// static methods


class  Matematik {
    square(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }
}


const mat = new Matematik();
mat.square(5);
// mat.cube(5); statik metotlar nesneler aracılığıyla çağrılamaz
console.log(mat);


Matematik.cube(5);
// Matematik.square(5);
