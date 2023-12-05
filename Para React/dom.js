//? ---------------------------- Manupulacion del DOM (Document Object Model)
const title = document.createElement('h1')
title.innerText = 'Hola Mundo desde JS'

const button = document.createElement('button')
button.innerText = 'Click here'

// button.addEventListener('click', () => {
//     title.innerText = 'Texto Actualiado con JS'
//     alert('Se realizo un Click')
// })

button.addEventListener('click', function ()  {
    title.innerText = 'Texto Actualiado con JS'
    alert('Se realizo un Click')
})

document.body.append(title)
document.body.append(button)
console.log(title);

//? ----------------------------
const user = {
    name: 'Fredii',
    age: 28
}
function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>'
}
console.log(printInfo(user));
document.body.innerHTML = printInfo(user)


//? ---------------------------- Destructurar un Objeto
const usuario = {
    name: 'Alfredo',
    age: 28
}
function printInf({ name }) {
    return '<h1>Hola ' + name + '</h1>'
}
// console.log(printInf(usuario));
//document.body.innerHTML = printInf(usuario)

//? ----------------------------
function printInform(user) {
    const { name, age } = user
    return '<h1>Hola ' + name + ', tienes ' + age +' años</h1>'
}
console.log(printInf(usuario));
document.body.innerHTML = printInform(usuario)