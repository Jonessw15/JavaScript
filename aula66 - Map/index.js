const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]
const dobroNumeros = numeros.map(valor => valor * 2)

console.log(dobroNumeros)

const pessoas = [
    { nome: 'Luis', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const retornaNome = pessoas.map(obj => obj.nome)
const retornaIdade = pessoas.map(obj => ({idade: obj.idade}))
const ID = pessoas.map((obj, indice) => {
    const newObject = { ...obj }
    newObject.ID = indice
    return newObject
})

console.log(retornaNome)
console.log(retornaIdade)
console.log(ID)