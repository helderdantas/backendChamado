const { Op } = require('sequelize');
const IEquipeSuport = require('../models/EquipeSuport');

module.exports = {
    
    // Método criar equipeSuport
    async createEquipeSuport(req, res) {
        try {
            const { ativo, nome, telefone} = req.body
            const equipeSuport = await IEquipeSuport.create({ ativo, nome, telefone})
            res.status(200).json(`${equipeSuport.nome} criado com sucesso.`)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para alterar o campo ativo de true false do equipeSuport, pelo id
    async updateCampoAtivoEquipeSuport(req, res) {
        try {
            const { id } = req.params;
            const ativo = false;
            const equipeSuport = await IEquipeSuport.update({ ativo }, { where: { id } })
            res.status(200).json("equipeSuport atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Lista todos os Suports do banco de dados
    async listarTodosEquipeSuports(req, res) {
        try {
            const equipeSuports = await IEquipeSuport.findAll({ order: [['id', 'ASC']] }) // OU 'DESC' - DESCRECENTE
            if (!equipeSuports) {
                res.status(401).json("Não há nenhum equipeSuport cadastrado")
            }
            res.status(200).json(equipeSuports)

        } catch (error) {
            res.status(400).json({ error })
        }

    },

    // Lista os equipeSuports do banco de dados com o campo ativo = true 
    async listarEquipeSuportsAtivo(req, res) {
        try {
            console.log('entrei')
            const equipeSuports = await IEquipeSuport.findAll({
                where: { ativo: true }, // atributos
                order: [['nome', 'ASC']] //literal 'id', ordem 'DESC'
            }) // OU 'ASC PARE ORDEM CRESCENTE
            res.status(200).json(equipeSuports)

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para deletar equipeSuport
    async deletarEquipeSuport(req, res) {
        try {
            const { id } = req.params;
            const equipeSuport = await IEquipeSuport.findOne({ where: { id } })
            if (!equipeSuport) {
                res.status(401).json("equipeSuport não encontrado")
            } else {
                await IEquipeSuport.destroy({ where: { id } })
                res.status(200).json("equipeSuport deletado com sucesso")
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },

     // Método para atualizar o telefone do suporte pelo id
     async updateTelefoneEquipeSuport(req, res) {
        try {
            const { id } = req.params;
            const { telefone } = req.body
            const chamado = await IEquipeSuport.update({ telefone}, { where: { id } })
            res.status(200).json("Telefone do suporte atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },
}
