function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

 function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mês = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mês}/${ano} ${hora}:${min}:${seg}`
 }

 const data = new Date()
 const dataBrasil = formataData(data)
 console.log(dataBrasil)

/* const tresHoras = 60 * 60 * 3 * 1000
 const data = new Date(0 + tresHoras)  // 01/01/1970 Timestamp unix ou época unix */
 
 /* const data = new Date('2023-01-01 12:12:12.100') 
 console.log('Dia', data.getDate())
 console.log('Mês', data.getMonth() + 1)
 console.log('Ano', data.getFullYear())
 console.log('Hora', data.getHours())
 console.log('Min', data.getMinutes())
 console.log('Seg', data.getSeconds())
 console.log('Ms', data.getMilliseconds())
 console.log('Dia da semana', data.getDay())
 console.log(data.toString()) */