function calcularProduto(numeros) {
    let produto = numeros.reduce((total, numero) =>{
        return total * numero;
    }, 1)
    return produto;
    }
    
    let numeros = [1, 2, 3, 4, 5];
    console.log(calcularProduto(numeros)); // 120