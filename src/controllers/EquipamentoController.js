const { Op } = require('sequelize');
const IEquipamento = require('../models/Equipamento');

module.exports = {
    
    // Método criar equipamento
    async createEquipamento(req, res) {
        try {
            const { ativo, nome} = req.body
            const equipamento = await IEquipamento.create({ ativo, nome})
            res.status(200).json(`${equipamento.nome} criado com sucesso.`)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para alterar o campo ativo de true false do equipamento, pelo id
    async updateCampoAtivoEquipamento(req, res) {
        try {
            const { id } = req.params;
            const ativo = false;
            const equipamento = await IEquipamento.update({ ativo }, { where: { id } })
            res.status(200).json("Equipamento atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Lista todos os equipamentos do banco de dados
    async listarTodosEquipamentos(req, res) {
        try {
            const equipamentos = await IEquipamento.findAll({ order: [['id', 'ASC']] }) // OU 'DESC' - DESCRECENTE
            if (!equipamentos) {
                res.status(401).json("Não há nenhum equipamento cadastrado")
            }
            res.status(200).json(equipamentos)

        } catch (error) {
            res.status(400).json({ error })
        }

    },

    // Lista os equipamentos do banco de dados com o campo ativo = true 
    async listarEquipamentosAtivos(req, res) {
        try {
            const equipamentos = await IEquipamento.findAll({
                where: { ativo: true }, // atributos
                order: [['nome', 'ASC']] //literal 'id', ordem 'DESC'
            }) // OU 'ASC PARE ORDEM CRESCENTE
            res.status(200).json(equipamentos)

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para deletar chamado
    async deletarEquipamento(req, res) {
        try {
            const { id } = req.params;
            const equipamento = await IEquipamento.findOne({ where: { id } })
            if (!equipamento) {
                res.status(401).json("Equipamento não encontrado")
            } else {
                await IEquipamento.destroy({ where: { id } })
                res.status(200).json("Equipamento deletado com sucesso")
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },    
}
