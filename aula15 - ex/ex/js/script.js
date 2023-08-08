const n1 = Number(prompt('Digite um número'))
const nTitulo = document.querySelector('#numero-titulo')

const raiz = document.querySelector('#raiz')
const inteiro = document.querySelector('#inteiro')
const nan = document.querySelector('#nan')
const alto = document.querySelector('#alto')
const baixo = document.querySelector('#baixo')
const decimal = document.querySelector('#decimal')

nTitulo.innerHTML = n1
raiz.innerHTML = `A raíz do seu número é ${n1 ** (1/2)}`
inteiro.innerHTML = `${n1} é inteiro: ${Number.isInteger(n1)}`
nan.innerHTML = `É NaN: ${Number.isNaN(n1)}`
alto.innerHTML = `Arredondando para baixo: ${Math.floor(n1)}`
baixo.innerHTML = `Arredondando para cima: ${Math.ceil(n1)}`
decimal.innerHTML = `Seu número com duas casas decimais: ${n1.toFixed(2)}`

