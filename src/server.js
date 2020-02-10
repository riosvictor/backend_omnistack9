const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes  = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL
, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET - buscar info, POST - criar info, PUT - editar info, DELETE - deletar info

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(process.env.PORT || 3333);

