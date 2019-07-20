const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // insere na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover através do splice
pilotos.splice(3, 1) // mssa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array apartir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna um novo array apartir da posição 1 até o 4, porém sem incluir o índice 4
console.log(algunsPilotos2)



// splice -> emendar, unir, juntar...
// slice -> fatia, pedaço, porção...