const h1 = document.querySelector('.container h1')
const data = new Date()
const opcoes = {
    dateStyle: 'full', 
    timeStyle: 'short'
}
console.log(opcoes)
h1.innerHTML = data.toLocaleString('pt-BR', opcoes)

/* // MEU MODELO

const h1 = document.querySelector('.container h1')

// DIA DA SEMANA
const data = new Date()
const diaSemana = data.getDay()

function getDay(diaSemana) {

    let diaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            return diaSemanaTexto
    
}
}

const numDia = getDay(diaSemana)

// DATA

const dia = data.getDate()
const diaMes = data.getMonth()
const ano = data.getFullYear()

function getMonth(diaMes) {

    let diaMesTexto

    switch (diaMes) {
        case 0:
            diaMesTexto = 'Janeiro'
            return diaMesTexto
        case 1:
            diaMesTexto = 'Fevereiro'
            return diaMesTexto
        case 2:
            diaMesTexto = 'Março'
            return diaMesTexto
        case 3:
            diaMesTexto = 'Abril'
            return diaMesTexto
        case 4:
            diaMesTexto = 'Maio'
            return diaMesTexto
        case 5:
            diaMesTexto = 'Junho'
            return diaMesTexto
        case 6:
            diaMesTexto = 'Julho'
            return diaMesTexto
        case 7:
            diaMesTexto = 'Agosto'
            return diaMesTexto
        case 8:
            diaMesTexto = 'Setembro'
            return diaMesTexto
        case 9:
            diaMesTexto = 'Outubro'
            return diaMesTexto
        case 10:
            diaMesTexto = 'Novembro'
            return diaMesTexto
        case 11:
            diaMesTexto = 'Dezembro'
            return diaMesTexto
        default:
            return diaMesTexto
    }
}

const numMes = getMonth(diaMes)

// HORA

function zeroAEsquerda(num) {
    return num > 10 ? num : `0${num}`
}

const hora = zeroAEsquerda(data.getHours())
const minutos = zeroAEsquerda(data.getMinutes())

h1.innerHTML = `${numDia}, ${dia} de ${numMes} de ${ano} ${hora}:${minutos}` */
