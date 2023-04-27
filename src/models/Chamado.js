const { Model, Sequelize } = require('sequelize');

// classe criar chamado para interagir com o banco de dados
class Chamados extends Model {
    static init(sequelize) {
        super.init({
            aberto: Sequelize.BOOLEAN,
            nome: Sequelize.STRING,
            setor: Sequelize.STRING,
            subSetor: Sequelize.STRING,
            ilha: Sequelize.STRING,
            baia: Sequelize.STRING,
            cputombo: Sequelize.STRING,
            cpunumeroserie: Sequelize.STRING,
            monitor1tombo: Sequelize.STRING,
            monitor1numeroserie: Sequelize.STRING,
            monitor2tombo: Sequelize.STRING,
            monitor2numeroserie: Sequelize.STRING,
            impressora: Sequelize.STRING,
            telefone: Sequelize.STRING,
            equipamentoComDefeito:Sequelize.STRING,
            equipamentoTombo:Sequelize.STRING,
            descricao:Sequelize.STRING,
            equipeSuport:Sequelize.STRING,
            status:Sequelize.STRING,
            observacao:Sequelize.STRING,

        }, {
            sequelize
        })
    }
}

module.exports = Chamados;