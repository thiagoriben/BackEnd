const express = require('express');
const app = express();

app.use(express.json())

const users = []

//responsavel por pegar todos os usuarios
app.get('/user', (req, res) =>{
    console.log("entrou no user(get)")
    res.status(200).send({users :users})//mostrando o array
    
    //send(req.params)
})

//responsavel por pegar um usuario
app.get('/user/:id', (req, res) =>{
    console.log("entrou no user(get by id)")
    res.status(200).send(req.params.id)
})

//criar novos usuarios
app.post('/user', (req, res) =>{
    console.log("entrou no user(post)")
    users.push(req.body)//jogando no array users
    res.status(200).send(req.params)
})

//atualizar dados atraves do id
app.put('/user/:id', (req, res) =>{
    console.log("entrou no user(put)")
    res.status(200).send(req.params.id)
})

//deletar dados atraves do id
app.delete('/user/:id', (req, res) =>{
    console.log("entrou no user(delete)")
    res.status(200).send(req.params.id)
})


app.listen(3000, () => {
    console.log("Iniciei meu servidor")
});
