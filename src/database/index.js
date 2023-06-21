const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Chamado = require('../models/Chamado')
const Equipamento = require('../models/Equipamento')
const EquipeSuport = require('../models/EquipeSuport')

const models = [Chamado,Equipamento,EquipeSuport];

const connection = new Sequelize(
    configDB.database,
    configDB.username,
    configDB.password,
    {
        host: configDB.host,
        dialect:configDB.dialect,
        port: configDB.port,
    },
    configDB.define
)

models.forEach((model) => model.init(connection));
