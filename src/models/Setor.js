const { Model, DataTypes } = require('sequelize');

// classe criar para interagir com o banco de dados
class Setor extends Model {
    static init(sequelize) {
        super.init({
            ativo: DataTypes.BOOLEAN,
            nome: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Setor;