// Construtora -> Pessoa(new)
function Pessoa(nome, sobrenome) {
    // Atributos ou metódos privados
    const ID = 123456
    const metodoInterno = () => {

    }

    // Atributos ou metódos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(`${this.nome}: Sou um metódo`)
    }
}

const p1 = new Pessoa('Jhonatan', 'Alves')

p1.metodo()