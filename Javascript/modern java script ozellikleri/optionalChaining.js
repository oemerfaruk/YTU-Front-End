const user = {
    name: "Omer Faruk",
    surname: "Aydin",
    address:{
        city:"Istanbul",
        country: "Turkey"
    }
}

// const city = user.address.city;

// console.log(city)
// console.log(user.address.street)


// const street =user && user.address ? user.address.street: 'Bilinmiyor';

// optional chaining

const street = user.address?.street ?? 'Bilinmiyor'

console.log(street)