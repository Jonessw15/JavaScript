/*
OPERADORES LÓGICOS
&& -> AND -> E --> Todas as expressões precisam ser verdadeiras para retornar 'true'
|| -> OR -> OU --> Todas as expressões precisam ser falsas para retornar 'false'
! -> NOT -> NÃO --> Inverte o sentido do valor 
*/

const expressaoAnd = true && true && true && true //&& false
const expressaoOr = false || false //|| true
console.log(expressaoAnd)
console.log(expressaoOr)


console.log(!true)
console.log(!false)