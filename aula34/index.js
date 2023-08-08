// i = index; (PADRÃO)

/* for (let i = 50; i >= 0; i -= 5) {
    console.log(`linha ${i}`)
} */

/* for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ínpar'
    console.log(i, par)
} */

const fruits = ['Maçã', 'Pêra', 'Uva']

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i])
}