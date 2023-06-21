const { Model, Sequelize } = require('sequelize');

// classe criar chamado para interagir com o banco de dados
class Chamados extends Model {
    static init(sequelize) {
        super.init({
            aberto: Sequelize.BOOLEAN,
            nome: Sequelize.STRING,
            setor: Sequelize.STRING,
            subsetor: Sequelize.STRING,
            ilha: Sequelize.STRING,
            estacaotrabalho: Sequelize.STRING,
            equipamentocomdefeito:Sequelize.STRING,
            equipamentotombo: Sequelize.STRING,
            equipamentonumeroserie: Sequelize.STRING,
            descricao:Sequelize.STRING,
            equipesuport:Sequelize.STRING,
            status:Sequelize.STRING,
            observacao:Sequelize.STRING,

        }, {
            sequelize
        })
    }
}

module.exports = Chamados;