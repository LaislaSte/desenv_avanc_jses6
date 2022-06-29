//tratamento de erros
/*o js quando pego um erro interrompe todo o restante do codigo a ser executado
example error:
console.log(name);
const name = 'laisla' //const nao possui propriedade de hosting
console.log('continue...')
*/
//erro costomizado:
class CustomError extends Error {
    constructor({message, data}){
        super(message)
        this.data = data
    }
}

//podemos capturar nossos error em bloco try catch
try {
    console.log(name);
    const name = 'laisla'
    //classe error, costumizando um erro:
    //const myError = new Error ('custom message')
    const myError = new CustomError({
        message: 'custom message on custum error', 
        data: {
            type: 'serve error',
            //focues: name
        }
    })
    throw myError
} catch (error) {
    console.log(error)
} finally{
    //independente das duas possibilidades faça
    console.log('continue...')
}
