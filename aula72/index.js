// Para usar getter e setters não precisamos 
// mais dos metódos 'value' e 'configurable'
// porque o getter e setter fazem isso por ele

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        configurable: true, // Configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                // console.log('Bad value');
                // return;
                throw new typeError('Bad value');
            }
        }
    })
}1

const p1 = new Produto('Jhonatan', 15, 10);
console.log(p1.estoque);