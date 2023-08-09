const pessoa1 = new Object();
pessoa1.nome = 'Jhonatan';
pessoa1.sobrenome = 'Alves';
pessoa1.idade = 18;

// const pessoa2 = {
//     nome: 'Jhonatan',
//     sobrenome: 'Alves'
// }

// delete pessoa1.nome;

pessoa1.falarNome = function() {
    return `${this.nome} está falando seu nome.`;
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    // console.log(chave);
}

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Jhonatan', 'Alves')
console.log(p1);