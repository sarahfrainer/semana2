function filtrarPares(numeros) {
    let numerosPares = numeros.filter((numero) => {
        return numero % 2 === 0;
    })
    return numerosPares;
    }
    
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); 


function filtrarAdultos(pessoas) {
    let maioresDeIdade = pessoas.filter((pessoa) => {
        if (pessoa.idade > 18) {
            return pessoa;
        }
    }).map((pessoa) => pessoa.nome);
    return maioresDeIdade;
}

    let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];
    console.log(filtrarAdultos(pessoas));

    