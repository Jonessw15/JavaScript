/* try {
    console.log(naoExisto)
} catch(error) {
    console.log("naoExisto não existe")
    console.log(error)
} */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números')
/*         throw new Error ('x e y precisam ser números')
 */    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('x', 2))
} catch(error) {
    console.log(error)
}