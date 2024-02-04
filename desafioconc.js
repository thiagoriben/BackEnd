const express = require('express');
const app = express();

app.use(express.json());

const carros = [];

app.get('/carro', (req, res) =>{
    req.status(200).send({carros: carros})
})
app.get('/carro:id', (req, res) =>{
    const carroID = req.params.id
    res.status(200).send(carros.find(x => x.id == carroID))
})
app.post('/carro', (req, res) =>{
    carros.push(req.body)
    res.status(200).send(req.params)
})
app.listen(3000, () => {
    console.log("Servidor iniciado!")
})
