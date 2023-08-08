const nome = ['Jones', 'Jhona']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}

for (let i of nome) {
    console.log(i)
}

nome.forEach(function(i, indice, array) {
    console.log(i, indice, array)
})