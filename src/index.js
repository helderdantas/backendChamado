const cors = require('cors')
const express = require('express');
const routes = require('./routes');
const db = require('./database');
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3032, () => console.log("Servidor iniciado na porta 3032"));

