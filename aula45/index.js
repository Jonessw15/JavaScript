/* try {
    console.log('Abrindo arquivo...')
    console.log(a)
} catch (error) {
    console.log('Encontrado um erro')
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: dando erro ou não sempre irá aparecer')
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11)
    console.log(hora)
} catch (error) {
    console.log(error)
} finally {
    console.log('Tenha um bom dia')
}
