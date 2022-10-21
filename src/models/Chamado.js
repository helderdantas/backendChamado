const { Model, DataTypes } = require('sequelize');

// classe criar chamado para interagir com o banco de dados
class Chamados extends Model {
    static init(sequelize) {
        super.init({
            aberto: DataTypes.BOOLEAN,
            nome: DataTypes.STRING,
            setor: DataTypes.STRING,
            subSetor: DataTypes.STRING,
            equipamentoComDefeito:DataTypes.STRING,
            equipamentoTombo:DataTypes.STRING,
            descricao:DataTypes.STRING,
            equipeSuport:DataTypes.STRING,
            status:DataTypes.STRING,
            observacao:DataTypes.STRING,

        }, {
            sequelize
        })
    }
}

module.exports = Chamados;