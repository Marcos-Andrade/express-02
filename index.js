const express = require('express')
const path = require('path')

const app = express()
const port = 3030

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'views/index.html')))
app.get('/sobre', (req, res) => res.sendFile(path.join(__dirname,'views/sobre.html')))

app.listen(port, () => console.info(`Servidor rodando na porta ${port}`))