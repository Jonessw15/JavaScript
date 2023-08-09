// defineProperty OU defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        value: estoque,  // Acrescenta valor a chave
        writable: false,  // Pode alterar
        configurable: true // Configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  // Mostra a chave
            value: estoque,  // Acrescenta valor a chave
            writable: false,  // Pode alterar
            configurable: true // Configurável
        },
        preco: {
            enumerable: true,  // Mostra a chave
            value: estoque,  // Acrescenta valor a chave
            writable: false,  // Pode alterar
            configurable: true // Configurável
        }
    })
}

const p1 = new Produto('Jhonatan', 15, 10);
p1.estoque = 30;
console.log(Object.keys(p1))