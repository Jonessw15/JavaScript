/* function CriaCalculadora() {
        this.display = document.querySelector('.display')

        this.inicia = () => {
            this.cliqueBotoes()
            this.pressionaEnter()
        }

        this.pressionaEnter = () => {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        }

        this.realizaConta = () => {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('Conta inválida')
            }
        }

        this.btnClear = () => {
            this.display.value = ''
        }

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1)
        }

        this.cliqueBotoes = () => {
            document.addEventListener('click', (e) => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.btnClear()
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
                this.display.focus()
            })
        }

        this.btnParaDisplay = (valor) => {
            this.display.value += valor
        }

}

const calculadora = new CriaCalculadora()
calculadora.inicia()  */

// New

function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        capturaCliques()
        capturaEnter()
    }

    const capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) eqNumDisplay()
        })
    }

    const capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('btn-num')) addNumDisplay(el)
            if (el.classList.contains('btn-clear')) clearNumDisplay()
            if (el.classList.contains('btn-del')) delNumDisplay()
            if (el.classList.contains('btn-eq')) eqNumDisplay()
            this.display.focus()
        }) 
    }

    let addNumDisplay = (el) => this.display.value += el.innerText
    let clearNumDisplay = () => this.display.value = ''
    let delNumDisplay = () => this.display.value = this.display.value.slice(0, -1)

    let eqNumDisplay = () => {
        try {
            let conta = eval(this.display.value)

            if(!conta) {
                alert('Conta inválida')
                return
            }
            
            this.display.value = conta
        } catch(e) {
            alert('Conta inválida')
            return
        }
    }
} 

const calculadora = new Calculadora()
calculadora.inicia()