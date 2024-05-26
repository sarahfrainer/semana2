function compor(f, g, x) {
    return f(g(x));
    }
    
    function somar1(x) {
    return x + 1;
    }
    
    function multiplicar2(x) {
    return x * 2;
    }
    
    let funcaoComposta = compor(somar1, multiplicar2, 5);
    console.log(funcaoComposta); 