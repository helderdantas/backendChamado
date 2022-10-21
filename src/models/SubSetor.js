const { Model, DataTypes } = require('sequelize');

// classe criar para interagir com o banco de dados
class SubSetor extends Model {
    static init(sequelize) {
        super.init({
            ativo: DataTypes.BOOLEAN,
            nome: DataTypes.STRING,
            nomeSetor: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = SubSetor