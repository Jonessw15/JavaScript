// First-class Objects

// Declaração de função (função hoisting)
// Função hoisting: função na qual não importa onde chamarmos ainda funcionará

talkHello()

function talkHello() {
    console.log("Hello")
}

talkHello()

// Function Expression
const souUmDado = function () {
    console.log('Sou um dado')
}

souUmDado()

/* function executaFuncao(funcao) {
    funcao()
}

executaFuncao(souUmDado) */

// Arrow function

const funcaoArrow = () => {
    console.log("Sou uma Arrow function")
}

funcaoArrow()

// Dentro de um objeto

const obj = {
    falar() {
        console.log("Estou falando")
    }
}

obj.falar()