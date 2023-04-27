const { Model, Sequelize } = require('sequelize');

// classe criar equipamento  para interagir com o banco de dados
class Equipamento extends Model {
    static init(sequelize) {
        super.init({
            ativo: Sequelize.BOOLEAN,
            nome: Sequelize.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Equipamento;