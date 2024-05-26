function agruparPorCategoria(produtos) {
    let totalEletro = calcularTotalEletro(produtos);
    let totalLivros = calcularTotalLivros(produtos);
    let totalRoupas = calcularTotalRoupas(produtos);


    function calcularTotalEletro(produtos) {
        let eletronicos = produtos.filter((produto) => {
            return produto.categoria === 'eletrônicos';
        });

        let totalEletro = eletronicos.reduce((total, eletronico) => {
            return total + eletronico.preco;
        }, 0);

        return totalEletro;
    }

    function calcularTotalLivros(produtos) {
        let livros = produtos.filter((produto) => {
            return produto.categoria === 'livros';
        });

        let totalLivros = livros.reduce((total, livro) => {
            return total + livro.preco;
        }, 0);

        return totalLivros;
    }

    function calcularTotalRoupas(produtos) {
        let roupas = produtos.filter((produto) => {
            return produto.categoria === 'roupas';
        });

        let totalRoupas = roupas.reduce((total, roupa) => {
            return total + roupa.preco;
        }, 0);

        return totalRoupas;
    }

    return {
        eletronicos: totalEletro, 
        livros: totalLivros,
        roupas: totalRoupas};

}



let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
];
console.log(agruparPorCategoria(produtos));