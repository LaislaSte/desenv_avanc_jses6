//FETCH, ASYNC / AWAIT E EVENTEMITTER

//pra fazer requisições de arquivos era usado a api do browser xml http request, pode haver dificuldade com o promises. fetch faz requests

fetch('/data.json')
    .then(responseStream => responseStream.json())
    .then(data =>{
        console.log(data)
    })
    //console.log(responseStream)
    //error de rede é pego no catch
    //.catch(error => console.log('deu erro', error))

    fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if(responseStream.status === 200){
            return responseStream.json();
        }else{
            throw new Error ('request error')
        }
    })
    .then(data =>{
        console.log(data)
    })
    .catch(error => console.log('deu erro', error))


    //es7 async / await
//lidando com promises de maneira simples e enxuta
const simpleFun = async () =>{
    //throw new Error ('oh no')
    return 123;
}
console.log(simpleFun()); //retorna uma promise ja resovida
//o async ja transforma a fun em uma promise:
simpleFun().then(data =>{
    console.log(data)
}).catch(error =>{
    console.log(error)
})

//mas async nao se utiliza sozinho, vem o await, que espera outras promises serem resolvidas:

const asyncTimer = () => new Promise((resolve, reject) =>{
    setTimeout( ()=>{
        resolve(1234)
    }, 1200 )
})
const simpleFun2 = async () =>{
    const data = await asyncTimer();//vai esperar a 1 prom acabar
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());//vai esperar a 1 prom acabar
    //possos colocar elas em ums promise all
    const dataAll = await Promise.all( [ asyncTimer(), fetch('/data.json').then(resStream => resStream.json()) ] );
    return [ data, dataJSON, dataAll ]
}

//aplicações
//event emitter -> importe o modulo events
const EventEmitter = require('events')

const emitter = new EventEmitter() //gerei uma instancia
emitter.on('User logger', data => {
    console.log(data)
}) //gerei um consumidor
emitter.emit('User logger', {user: "Carlos"})//consumi

//posso fazer uma extenção com a classe event emitter:
class Users extends EventEmitter{
    //meu metodo:
    userLogged(data){
        setTimeout(
            ()=>{ this.emit('User logged', data) }
            ,1200)
    }
}
const users = new Users() //instanciei a classe
users.on('User logged', data => {
    console.log(data)
}) //gerei um consumidor; posso udar once para consumir apenas uma vez

users.userLogged({user: 'carlos henrique'})//consumi