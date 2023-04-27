const { Model, Sequelize } = require('sequelize');

// classe criar para interagir com o banco de dados
class EquipeSuport extends Model {
    static init(sequelize) {
        super.init({
            ativo: Sequelize.BOOLEAN,
            nome: Sequelize.STRING,
            telefone: Sequelize.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = EquipeSuport;