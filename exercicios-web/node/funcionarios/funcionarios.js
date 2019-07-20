const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = funcionario => funcionario.genero === 'F'
const chineses = funcionario => funcionario.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salario?
    const func = funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario)
    console.log(func)
})