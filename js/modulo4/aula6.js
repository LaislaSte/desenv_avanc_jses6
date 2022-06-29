//PROMISES E FETCH

//call backs e promises:
//antigamente era chamados funções para executar tal tarefa dps de uma tread. Ex:

//treads:
function doSomething(callback){
    setTimeout( function(){
        //did something
        callback('first data');
    }, 1000 )
}
function doOtherThing(callback){
    setTimeout( function(){
        //did other thing
        callback('second data');
    }, 1000 )
}

//se quissese executa-las de maneira sequencial:

function doAll(){
    doSomething( 
        function(data){
            var processedData = data.split('');
            
            doOtherThing( 
                function(data2){
                    var processedData2 = data2.split('');
                    setTimeout( function(){
                        console.log(processedData, processedData2)
                    }, 1000 )
                } 
            );
        } 
    );
}
doAll();
//se eu tivesse que fazer algum tratamento de dados, colocar try catch, ficaria muito verboso cheios de try back, com as promisses e processamento assincrono daria pra fazer esse tratamento de maneira mais enxuta

//promises
const myPromise = new Promise( (resolved, reject)=>{
    //quando feito a condição return resolved, se der error o rejject
} );
var doSomethingPromise = new Promise( (resolve, reject)=>{
    //throw new Error ('Sothing went wrong')
    setTimeout( function(){
        //did something
        resolve('first data');
    }, 1000 )
    
} )
var doOtherThingPromise = new Promise( (resolve, reject)=>{
    setTimeout( function(){
        //did other thing
        resolve('second data');
    }, 1000 )
} )
//se quiser procesalas de maneira sequencial
doSomethingPromise.then(data => console.log(data))
doOtherThingPromise.then(data2 => console.log(data2))
//para tratamento de error
//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error))

//é possivel fazer cadeias de promises:
doSomethingPromise
.then(data => {
    console.log(data);
    return doOtherThingPromise
})
.then(data2 => console.log(data2))
.catch(error => console.log('deu error: ', error))

//promises tem 3 estagios
//pendent -> pendente em execução
//fulfilled -> terminou de executar
//reject -> quando da error

//posso faze-las como funções
var doSomethingPromiseFun = () =>
    new Promise( (resolve, reject)=>{
        setTimeout( function(){
            //did other thing
            resolve('first data');
        }, 1000 )
    })
var doOtherThingPromiseFun = () =>
    new Promise( (resolve, reject)=>{
        setTimeout( function(){
            //did other thing
            resolve('second data');
        }, 1000 )
    } )

    //executando
doSomethingPromiseFun()
.then(data => {
    console.log(data);
    return doOtherThingPromiseFun();
})
.then(data2 => console.log(data2))
//.catch(error => console.log('deu error: ', error))

//é possivel executar promises em paralelo, executadas ao mesmo tempo
Promise.all( [doSomethingPromiseFun(), doOtherThingPromiseFun()]).then(data => {
    console.log(data)
})
//.catch(error => { console.log(error) });

//a que for resolvida primeiro aparece
Promise.race( [doSomethingPromiseFun(), doOtherThingPromiseFun()]).then(data => {
    console.log(data)
})
//.catch(error => { console.log(error) });