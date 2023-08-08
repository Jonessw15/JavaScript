// IIFE - Immediately Invoked Function Expression
(function() {
    const sobrenome = 'Alves'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }
    console.dir(criaNome('Jones'))
})()