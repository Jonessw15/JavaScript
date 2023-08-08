const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
/*     console.log(p)
 */}

/*  for (let i = 0; i < ps.length; i++) {
    const ps1 = ps[1]
    ps1.style.color = 'white'
 } */