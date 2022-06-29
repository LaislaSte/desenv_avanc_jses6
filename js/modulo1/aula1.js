//ARROW FUNCTIONS

//maneira classicca de escrever função
function log(value){
    console.log(value);
}
log("teste1")


//funções anonimas (atribuida a uma var ou passada como parametro pra outra function)
var log2 = function(value){
    console.log(value);
}

var sum = function(a, b){
    return a+b;
}

log2('teste 2');
console.log(sum(10, 10));

//Arrow (=>) functions (funções anonimas; return implicito)
var sum2 = (a, b) => a + b;
console.log(sum2(5,5));

//se fosse add mais de uma operação na A.F. obrigatoriamente tem o return:
var sum3 = (a, b) => {
    var x = 10;
    if (a > b){
        //faca isso
    }
    return a + b;
}

//quando só há 1 argumento no parametro
var sum4 = a => a+5;
var sum4 = (...a) => a;
var sum4 = (a = 6) => a;


//objetos literal
var obj = {
    'nome': 'laisla'
}
//return de um obj
var objt = () => ({'teste': 123})//LOG objt
console.log(objt)

//nao da pra fazer como AF -> funcoes construtoras
function car(){
    this.foo = 'bar'
}
console.log(new car())

//não é possivel com AF -> hosting
log5('teste hosting')
//var log5 = (value)=> (console.log(value))
function log5(value){
    console.log(value)
}


//objetos com funcoes como value
var objt1 = {
    //contexto de invocação
    showContext: function showContext(){
        //this.log('teste');
        //this = objt
        setTimeout( () => {
            //console.log(this);
            this.log('teste this')
            this.log('depois de 1 seg')
            }, 1000
        );
    },

    log: function log(value){
        console.log(value)
    }
}
objt1.showContext()
objt1.log(123)