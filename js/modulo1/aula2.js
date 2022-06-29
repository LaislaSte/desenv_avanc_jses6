//DEFAULT FUNCTIONS ARGUMETNS - ARGS PADRAO

//se eu qiosesse atribuir argumentos default
function mult (a,b){
    //b = b || 1;
    //validações de tipo
    b = typeof b === 'undefined' ? 1 : b;
    //que é igual a
    if(typeof b === 'undefined'){
        b = 1
    }
    return a * b;
}

console.log(mult(2, 6));//12
console.log(mult(2));//2
console.log(mult(2, 0)); //0 é um valor falso


//atribuindo valores padrao sem validação
function mult1 (a,b = 1){
    return a * b;
}
console.log(mult(2));
console.log(mult(2, 0)); //0 é um valor falso
console.log(mult(2, undefined));

//lazy eladuation - gerar id, erros e demais valores
function radowNumer(){
    console.log('gerado numero aleatorio')
    return Math.random() * 2;
}
function multRandow (a, b = radowNumer()){
    return a * b;
}
console.log(multRandow(2)); 