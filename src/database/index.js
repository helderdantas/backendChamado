const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Chamado = require('../models/Chamado')
const Setor = require('../models/Setor')
const SubSetor = require('../models/SubSetor')
const Equipamento = require('../models/Equipamento')
const EquipeSuport = require('../models/EquipeSuport')
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
Chamado.init(connection)
Setor.init(connection)
SubSetor.init(connection)
Equipamento.init(connection)
EquipeSuport.init(connection)
module.export = connection;