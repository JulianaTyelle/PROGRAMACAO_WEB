let produtos = []; //array de controle interno da aplicacao, não será visível

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };

    return p;

}

function adicionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){ 
    produtos = produtos.filter((p) => { //funcao estilo arrow. Essa função retorna uma cópia e sobrescreve a minha lista de produtos
        return p.id != id; //percorrer a lista
    });
}

function editarProduto(id, qtd){
    produtos.forEach(p => {
        if (p.id == id) {
            p.qtd = qtd;
        }
    });
}


module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};