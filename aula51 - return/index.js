// return
// Retorna um valor
// Termina a função

// Duas maneiras para declarar um objeto
/* function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('Jones', 'Alves')
const p2 = {
    nome: 'Luis',
    sobrenome: 'Otávio'
}

console.log(typeof p1)
console.log(typeof p2) */

/////////////////////////////////////////////

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('Mundo!')
console.log(resto)

// Multiplicador

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)

console.log(duplica(2))
console.log(triplica(2))