const express = require('express')
const bodyParse = require('body-parser')
const userRoute = require('./routes/usersRoutes')

const app = express()
const port = 3000

userRoute(app)

app.use(bodyParse.urlencoded( {extended: false} ) )

app.listen(port, ()=> console.log('api rodando na porta 3000'))
//metodos http:
app.get('/', (request, response) => response.send('ola mundo pelo express') )



//atividade pratica Users
//criando endpoints com as funcoes httml
/*
get - listar users
post - criar users
put - modificar users
delete - remover users
*/

/* CLI - comand line interface
copiando um arquivo de extensão js para o dir cp*js ~/diretorip

*/