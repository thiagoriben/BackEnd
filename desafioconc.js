const express = require('express');
const app = express();

app.use(express.json());

const carros = [];

app.get('/carro', (req, res) =>{
    req.status(200).send({carros: carros})
})
app.get('/carro:id', (req, res) =>{
    const alunoId = req.params.id
    res.status(200).send(users.find(x => x.id == alunoId))
})
app.get('/carro', (req, res) =>{
    req.status(200).send({carros: carros})
})
app.get('/carro', (req, res) =>{
    req.status(200).send({carros: carros})
})

app.listen(3000, () => {
    console.log("Servidor iniciado!")
})
