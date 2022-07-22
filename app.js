// show a greeting alert message to the BS-Commerce

const greet = () => {
    alert('Brain Station E-commerce')
    alert('A random number: ' + giveMeARandomNumber())
}

greet()

const giveMeARandomNumber = () => {
    return parseInt((Math.random() * 100) % 50)
}
