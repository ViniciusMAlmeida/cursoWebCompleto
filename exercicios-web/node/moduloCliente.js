const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// ES6 version
// import moduloA, { ola, bemVindo, ateLogo } from './moduloA';
// import moduloB, { bomDia, boaNoite } from './moduloB';

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)