function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('#res')

    const pessoas = []

    function recebeEventoForm(e) {
        e.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `${nome.value} ${sobrenome.value} <p>${peso.value}Kg</p> <p>${altura.value} cm</p>`
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()