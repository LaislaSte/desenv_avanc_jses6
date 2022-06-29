//SYMBOLS E ITERATORS
//symbols gera identificador unico, pense que é um tipo

const uniqueId = Symbol('é unico!!');
const uniqueId2 = Symbol('é unico!!');
console.log(uniqueId)
console.log(uniqueId === uniqueId2)//return false
//posso passar um valor Symbol('hello')

//pode se utilizar para gerar utilidades privadas
const objt = {
    [uniqueId]:'hi'
}
console.log(objt)

//se quisermos pegar o valor no nav
Object.keys(objt)//return []
//ou 
Object.getOwnPropertySymbols(objt)
//propriedade privada "_id"

//well knows symbols -> Symbols.
//Symbol.iterator
//Symbol.split
//Symbol.toStringTag

const arr = [1,2,3,4,5]
const it = arr[Symbol.iterator]()
//podia aplicar um while
//ou com es6 um for while
for (let value of arr){
    console.log(value)
} // 1 2 3 4 5

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
//interator -> interface pra consumir passo a passo uma estrutura de dados

const objtList = {
    values: [1,2,3,4],
    [Symbol.iterator] () {
        //se quiser retornar os valores do values
        let i = 0;
        return {
            next: () => {
                i ++
                return {
                    value: this.values[i-1],
                    done: i>this.values.length
                }
            }
        }
    }
}

const itd = objtList[Symbol.iterator]()
console.log(itd.next())
console.log(itd.next())
console.log(itd.next())
console.log(itd.next())
//com isso o objt se tornou literavel

//GENERATORS -> sao fun com pausas e despausa de valores atraves do value e do done

function hello(){
    console.log('hola')//pt1
    console.log('from')//pt2
    console.log('function')//pt3
}
hello()
//se quisesse parar em alguma logica do fluxo
//para criar um generator usa-se a sixtase:
function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence()
console.log(generator.next())//one, value 1, done false
console.log(generator.next())//two, value 2, done false
console.log(generator.next())//three, value 3, done true

//da para colocar em um loop de for..of:
let generator2 = generateSequence()
for(let value of generator2){
    console.log(value)
} //o loop nao mostra o tres porque a sequencia termina nele com o return, para mudar isso é só coloca-lo como yield

//generators são iteraveis
function* generateSequence2(){
    yield 1;
    yield 2;
    yield 3;
}
let sequence = [0, ...generateSequence2()]
console.log(sequence)

//com isso é possivel criar senhas, gerando caracteres, numeros e letras, e fazer uma combinação entre eles3 