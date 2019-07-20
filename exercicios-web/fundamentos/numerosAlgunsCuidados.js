console.log(7 / 0) // retorna Infinity
console.log("10" / 2) //efetua a divisão
console.log('3' + 2) //String ganha! Como soma(sinal de +) faz parte do contexto string, será efetuado a concatenação ao invés da soma
console.log('3' - 2) //subtração não faz parte do contexto de string, logo será efetuado a subtração numérica ao invés da concatenação
console.log("show" * 2) //retorna um NaN (Not a Number)
console.log(0.1 + 0.7) //soma aproximada, conforme padrão da IEEE
//console.log(10.toSring()) // é lançado uma excessão, pois 10 não pode ser convertido em um String
console.log((10.324).toString()) //através dos parênteses () é edetuado um parse para o tipo Number, e Number pode ser convertido em String