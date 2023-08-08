// OBJETO = {}; ARRAY = [];
const pessoa = {
    nome: 'Jones',
    sobrenome: 'SW',
    idade: 18,
    endereco: {
        rua: 'Mulungu',
        numero: 35
    }
}

// Atribuição via desestruturação
const { nome = 'Não existe', sobrenome, ...resto } = pessoa
console.log(nome, resto) // RESTO = pega todas as variaveis após as outras

/* const { nome: teste, sobrenome } = pessoa
console.log(teste, sobrenome)
 */
