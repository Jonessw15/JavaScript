function soma(x = 0, y = 0) {
    const resultado = x + y
    return resultado 
    console.log('Olá, mundo!') // Tudo que está abaixo de return não é mais executável
}

console.log(soma(100, 20))



function saudacao(nome) {
    return `Boa noite ${nome}!`
}

const variavel = saudacao('Jess')
console.log(variavel)
