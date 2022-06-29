//REST e SPREAD OPERAROR

//function sum(a, b){
//    return a + b
//}

//vamo supor que eu quera passar varios argumentos na função
//console.log(sum(5,5, 3,2))

function sum(a, b){
    //argumets palavra reservada para conter todos os argumentos
    //console.log(arguments)
    var value = 0
    for(var i = 0; i<arguments.length; i++){
        value += arguments[i]
    }
    return value
}
console.log(sum(5,5, 3,2))

//isso gera problema de legibilidade, para isso serve os operadores -> rest operator "..." se assemelha com o argumets mas arguments é de prototype objeto,já o rest oper é de tipo array, podendo modificar como tal
function sum(...args){
    console.log(args)
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5,5, 5,2))

//arguments é inexistentes em arrow funtions, mas com o rest oper dá para utilizar
const sum2 = (a, b, ...rest)=>{
    console.log(a, b, rest)
}
sum2(3,3,45,6,7,8,5)


const mult = (...args)=> args.reduce((acc, value) => acc * value, 1)
console.log(mult(5,5,5) )

//spread operator -> pega todos os itens do array e transforma em parametro ou: se usa em string arrays objts literais e objts literaveis
const str ='hellor diggital innovation'
const arr = [1,2,3,4,5]

function logargs(...args){
    console.log(args)
}//fun logArgs(){console.log(arguments)}

logargs(...str)//quebra em caracteres e transforma em uma lista
logargs(...arr)
//combinando array com spreed - concatenar, clonar
const arr2 = [...arr, 6,7,8]
console.log(arr2)

//spread em objts literais
const objt = {
    teste: 212
}
//só pode utilizar para criar novos objetos:
//se as props forem =, a ordem de quem vem por ultimo prevalece
const objt2 = {
    ...objt,
    teste2:'hi',
    subobjt:{
        teste3:123
    }
}
console.log(objt2)

//clone de objt -> shallow clone -> nao clona sub objetos 
const objtClone = {...objt2}
objtClone.teste = 345 //mudando valor da prop objt passado como sprea
console.log(objtClone)//nao altera nosso objeto. para nao alterar o subobjt:

const objtClone2 = {...objt2, subobjt2: {...objt2.subobjt} }
objtClone.teste = 345
console.log(objtClone2) //clona tudo sem alterar nada


//DESTRUCTURING EM REACTJS
var arra = ['banana', 'maça', 'laranja']
//var [banana2, maca2, laranja2] = ['banana', 'maça', 'laranja']
//se quiser pegar cada valor e atribuir a uma var, de modo nao verboso -> destructuring assignment
var [banana2, maca2, laranja2] = arr
console.log("comparando a var com o indice do array", banana2, "=", arra[0])//iguais


//se colocar um array dentro - 2 niveis
var arra2 = ['banana', 'maça', 'laranja', ['tomate', 'pera'] ]
//var [banana2, maca2, laranja2, [tomate2]] = ['banana', 'maça', 'laranja', ['tomate']]
var [banana2, maca2, laranja2, [tomate2, pera2]] = arra2
console.log("comparando a var com o arrar em niveis", tomate2, "=", arra2[3][0])//iguais



//mesma fita com objts
var objtDest = {
    nome:'Sergio'
}
var { nome: nome2 } = objtDest //acha a prop name e coloca num var name 
console.log("comparando", nome2, "=", objtDest.nome) //nao muda o valor original

//nao teria a preocupação com as chaves : se forre um array
var frutas = ['apple', 'orange'];
var [apple2] = frutas //log apple2


//nested objt dentro de objt
var pessoa = {
    nome:'wergio',
    propri:{
        idade:12,
        favcolor: ['preto', 'branco']
    }
}
var {propri: {idade: idade2, favcolor: [color1, color2]  } } = pessoa

console.log("comparando", idade2, "=", pessoa.propri.idade)
console.log("comparando", color1, "=", pessoa.propri.favcolor[0])


//se usa com variavel let const var e functions
/*
function sum([a,b] = [0, 0]){//default value 0,0
    console.log(a+b)
    //mema fita: a = arr[0]; b =  arr[1]
}
//mema fita com objts
function sum({a,b}){
    return a+b
    //LOG sum({a:3, b:7})
}
*/