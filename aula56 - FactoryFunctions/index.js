function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala(assunto) {
            return `${this.nomeCompleto} está ${assunto}`
        },
        peso,
        altura,
        // Getter
        get imc() {
            const imc = this.peso / (this.altura ** 2) 
            return imc.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Jhonatan', 'Alves', 65, 1.75)
const p2 = criaPessoa('Jones', '', 60, 1.7)
p1.nomeCompleto = 'Antonio Alves Mendonça'
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)
console.log(p2.fala('falando sobre JS'))
console.log(p2.imc)