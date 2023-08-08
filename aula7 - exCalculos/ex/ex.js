const nome = 'Jhonatan'
const sobrenome = 'Alves'
const idade = 18
const peso = 65
const altura = 1.75
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${altura}m de altura e seu IMC é ${imc.toFixed(2).replace('.', ',')}`)
console.log(`${nome} nasceu em ${anoNascimento}`) 