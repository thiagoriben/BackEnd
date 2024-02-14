const express = require('express');
const app = express();

app.use(express.json())

//buscar todos os alunos
app.get('/user', (req, res) =>{
    console.log("get all")
    res.status(200).send(req.params)
})
//buscar um aluno pelo id
app.get('/user/:id', (req, res) =>{
    console.log("get by id")
    res.status(200).send(req.params.id)
})
//cadastrar novo aluno
app.post('/user', (req, res) =>{
    console.log("post")
    res.status(200).send(req.body)
})
//atualizar dados de um aluno pelo id
app.put('/user/:id', (req, res) =>{
    console.log("put by id")
    res.status(200).send(req.params.id)
})
//deletar um aluno pelo id
app.delete('/user/:id', (req, res) =>{
    console.log("put by id")
    res.status(200).send(req.params.id)
})

app.listen(3000, () =>{
    console.log('Servidor iniciado!')
})