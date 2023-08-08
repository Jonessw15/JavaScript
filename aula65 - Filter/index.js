const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

/* function callBack(valor/*,  indice, array *///) {
//    return (valor > 10) ;
//} 

const numsFiltrados = numeros.filter(valor => valor > 10)

console.log(numsFiltrados)


const pessoas = [
    { nome: 'Luis', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5)
const pessoasMaiorDe50 = pessoas.filter(obj => obj.idade > 50)
const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasMaiorDe50)
console.log(pessoasTerminaComA)