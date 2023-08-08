function relogio() {

    const relogio = document.querySelector(".relogio")
    let segundos = 0
    let timer
    
    function cronometro(segundos) {
        let date = new Date(segundos * 1000)
    
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = cronometro(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target
    
        if (el.classList.contains('iniciar')){
            clearInterval(timer)
            iniciarRelogio()
            relogio.style.color = 'green'
        }
    
        if (el.classList.contains('pausar')){
            clearInterval(timer)
            relogio.style.color = 'red'
        }
    
        if (el.classList.contains('zerar')){
            clearInterval(timer)
            segundos = 0
            relogio.innerHTML = '00:00:00'
            relogio.style.color = 'black'
        }
    })

}    
relogio()