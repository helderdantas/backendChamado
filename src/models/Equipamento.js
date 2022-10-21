const { Model, DataTypes } = require('sequelize');

// classe criar equipamento  para interagir com o banco de dados
class Equipamento extends Model {
    static init(sequelize) {
        super.init({
            ativo: DataTypes.BOOLEAN,
            nome: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Equipamento;