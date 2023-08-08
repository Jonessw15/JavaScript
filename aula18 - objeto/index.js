const pessoa = {
    nome: 'Jones',
    sobrenome: 'Alves',
    idade: 17,

    fala() {
        console.log(`Sou ${this.nome} ${this.sobrenome} e minha idade atual é ${this.idade}!`)
    }
}

pessoa.fala()

/* function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa = criarPessoa('Jones', 'Alves', 17)
console.log(pessoa) */