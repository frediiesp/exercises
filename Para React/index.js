//? ----------------------------Funciones en JS
function hello() {
    console.log('Hola Mundo');
}
hello();

function hi () {
    return function () {
        return 'Hola Mundo!';
    }
}
console.log(hi()());


//? ----------------------------Funciones con Parametros JS
function hola(name) {
    return 'Hola ' + name
}
console.log(hola('Alfredo'))
console.log(hola('Laura'))

function add(x, y) {
    return x + y
}
console.log(add(3, 4))
console.log(add(10))


//? ----------------------------Funciones con Parametros sin Valor
function suma(x, y = 0) {
    return x + y
}
console.log(suma(10, 20));


//? ----------------------------Objetos
const user = {
    name: 'Fredii',
    lastname: 'Zuñiga',
    age: 28,
    address: {
        country: 'Mexico',
        city: 'Aguascalientes',
        street: 'Ave Sagrada'
    },
    friends: ['Nata', 'Merlo', 'Josue'],
    active: true,
    sendEmail: function () {
        return 'Enviendo Correo...'
    },
    sendMail () {
        return 'Sending Email...'
    }
}
console.log(user.address.city);
console.log(user.friends);
console.log(user.sendEmail());
console.log(user.sendMail());

const name = 'Laptop'
const price = 3000
const newProduct = {
    name, //* Esto es igual a //name: name
    price
}
console.log(newProduct);