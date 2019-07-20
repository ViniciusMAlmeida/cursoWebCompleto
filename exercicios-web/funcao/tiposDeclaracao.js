console.log(soma(3, 4))

// function declaration - ocorre o hoisting
function soma(x, y) {
    return x + y
}

// function expression - não ocorre o hoisting
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression - não ocorre o hoisting
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))