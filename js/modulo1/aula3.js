//OBJETOS LITERAIS

//assim se declara um objeto
var objeto = {
    propriedade1: 'laisla',
    prop2: 18
}
console.log(objeto)
// pode referenciar variaveis para dar valor às propriedades
//porem repetia a msm palavra na prop e valor
var idade = 18
var objeto2 = {
    nome: 'Fernanda',
    idade: idade
}
console.log(objeto2)

//enhanced object literals
function metodo1(){
    console.log('metodo 1 chamado')
}
var obj = {
    metodo1,
    metodo2: function metodo2() {
        console.log(this)
        console.log('metodo 2 chamado')
    }
};
obj.metodo1();//metodo chamado
obj.metodo2();

//outra maneira de fazer metodo
var obj2 = {
    sum: function sum(a,b){
        return a + b;
    },
    //funcao anonina
    sum2: sum2 = (a,b) => a+b
};
console.log(obj2.sum(2,4))
console.log(obj2.sum2(3,5))

//ou
var objt = {
    sum(a,b){
        return a+b
    }
};
console.log(objt.sum(5,5))

//add propriedade de outra maneira
var propname = 'teste concat'
var objt2 = {  }
objt2[propname + ' posso eté fazer concatenção'] = "prop value"
console.log(objt2)