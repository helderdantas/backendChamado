const { Op } = require('sequelize');
const ISubSetor = require('../models/SubSetor');

module.exports = {
    
    // Método criar subSetor
    async createSubSetor(req, res) {
        try {
            const { ativo, nome, nomeSetor} = req.body
            const subSetor = await ISubSetor.create({ ativo, nome, nomeSetor})
            res.status(200).json(`subSetor ${subSetor.nome} criado com sucesso.`)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para alterar o campo ativo de true false do subSetores, pelo id
    async updateCampoAtivoSubSetor(req, res) {
        try {
            const { id } = req.params;
            const ativo = false;
            const subSetor = await ISubSetor.update({ ativo }, { where: { id } })
            res.status(200).json("subSetor atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Lista todos os SubSetores do banco de dados
    async listarTodosSubSetores(req, res) {
        try {
            const subSetores = await ISubSetor.findAll({ order: [['id', 'ASC']] }) // OU 'DESC' - DESCRECENTE
            if (!subSetores) {
                res.status(401).json("Não há nenhum subSetor cadastrado")
            }
            res.status(200).json(subSetores)

        } catch (error) {
            res.status(400).json({ error })
        }

    },

    // Lista os subSetores do banco de dados com o campo ativo = true 
    async listarSubSetoresAtivo(req, res) {
        try {
            const subSetores = await ISubSetor.findAll({
                where: { ativo: true }, // atributos
                order: [['nome', 'ASC']] //literal 'id', ordem 'DESC'
            }) // OU 'ASC PARE ORDEM CRESCENTE
            res.status(200).json(subSetores)

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para deletar subSetor
    async deletarSubSetor(req, res) {
        try {
            const { id } = req.params;
            const subSetor = await ISubSetor.findOne({ where: { id } })
            if (!subSetor) {
                res.status(401).json("subSetor não encontrado")
            } else {
                await ISubSetor.destroy({ where: { id } })
                res.status(200).json("subSetor deletado com sucesso")
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },    
}
