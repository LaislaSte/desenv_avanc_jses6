//OBJETOS LITERAIS

//assim se declara um objeto
var objeto = {
    propriedade1: 'laisla',
    prop2: 18
}
// pode referenciar variaveis para dar valor às propriedades
//porem repetia a msm palavra na prop e valor
var idade = 18
var objeto2 = {
    propriedade1: 'laisla',
    idade: idade
}

//enhanced object literals
function metodo1(){
    console.log('metodo chamado')
}
var obj = {
    metodo1
};
obj.metodo1();//metodo chamado


//outra maneira de fazer metodo
var obj = {
    sum: function sum(a,b){
        return a + b;
    },
    //funcao anonina
    sum2: sum2 = (a,b) => a+b
};

obj.sum(2,4)
obj.sum2(3,5)

//ou
var objt = {
    sum(a,b){
        return a+b
    }
};
console.log(objt.sum(5,5))

//add propriedade de outra maneira
var propname = 'teste'
var objt2 = {  }
objt2[propname + 'posso eté fazer concatenção'] = "prop value"
console.log(objt2)