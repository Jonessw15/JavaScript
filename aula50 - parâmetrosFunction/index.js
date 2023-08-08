// Como não tem parâmetro, podemos pegar os valores usando o argumento 'arguments'
function funcao() {
    console.log(arguments[0])

    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}

/* funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) */
funcao(1, 2, 3, 4, 5, 6, 7)

// Desestruturação de objetos
function desestrutura({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

// Desestruturação de array
function desestrutura2([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}

let array = ['Jones', 'Alves', 18]

let obj = {
    nome: 'Jones',
    sobrenome: 'Alves',
    idade: 18
}
desestrutura(obj)
desestrutura2(array)

// Parâmetros + for of
const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}

conta('+', 0, 1, 2, 3, 4, 5)