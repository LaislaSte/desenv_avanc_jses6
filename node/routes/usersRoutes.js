//usando modulos nativos do js
const { response } = require('express')
const fs = require('fs')
const { request } = require('http')
//para lidar com pastas de arquivo - caminhos/diretorios
const { join } = require('path')


//por enquanto vamos ter apenar um arquivo json para armazenar os dados em vez de um banco
const filePath = join(__dirname, 'users.json')

//simulação de uso do banco com as seguintes fun

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

        try{
            return JSON.parse(data)
        }catch (error){
            return []
        }
    /*
    if (fs.readFileSync(filePath)){
        //do something
        try {
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }else{
        return []
    }
*/
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

//injetando dependencia pra dentro da funcao
const userRoute = (app) => {
    //essa rota cuida de todas as requisiçõe, get delete post etc que tenha /users passando com parametro id
    app.route('/users/:id?')
        .get( (request, response) =>{
            const users = getUsers()
            response.send({users})
        } )

        .post( (request, response) =>{
            const users = getUsers()

            //posso encrementar aqui, façamos um exercicios com o post:
            //const { email, nome} = request.body

            users.push(request.body)
            saveUser(users)
            response.status(201).send('created')
        } )
        
        .put( (request, response) =>{
            const users = getUsers()

            saveUser( users.map( user => {
                if (user.id === request.params.id) {
                    return {
                        ...user,
                        ...request.body
                    }
                } else {
                    return user
                }
            }) )
            response.status(200).send('okay')
        } )

        .delete( (request, response) =>{
            const users = getUsers()

            saveUser( users.filter( user => user.id !== request.params.id))

            response.status(200).send('okay')
        } )
}

module.exports = userRoute