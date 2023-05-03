const express = require("express")
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
const app = express()
const porta = 3333

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.post('/mulheres', criaMulher))

app.listen(porta, mostraPorta)