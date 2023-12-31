const { Op } = require('sequelize');
const IChamado = require('../models/Chamado');

module.exports = {
      
    // Método criar chamado
    async createChamado(req, res) {
        try {
            
            const { nome, setor, subsetor, ilha, estacaotrabalho,  equipamentocomdefeito, equipamentotombo, equipamentonumeroserie,  descricao, equipesuport } = req.body
            const aberto = true;
            const status = "ABERTO";
            const observacao = "";          
            const chamado = await IChamado.create({ aberto, nome, setor, subsetor, ilha, estacaotrabalho,  equipamentocomdefeito, equipamentotombo, equipamentonumeroserie,  descricao, equipesuport, status, observacao})
            res.status(200).json("Chamado criado com sucesso")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para atualizar um chamado pelo id
    async updateChamado(req, res) {
        try {
            const { id } = req.params;
            const { aberto, nome, setor, subsetor, ilha, estacaotrabalho,  equipamentocomdefeito, equipamentotombo, equipamentonumeroserie,  descricao, equipesuport, status, observacao } = req.body
            const chamado = await IChamado.update({aberto, nome, setor, subsetor, ilha, estacaotrabalho,  equipamentocomdefeito, equipamentotombo, equipamentonumeroserie,  descricao, equipesuport, status, observacao  }, { where: { id } })
            res.status(200).json("Chamado atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para alterar o campo ativo de true false do chamado, pelo id
    async updateCampoAbertoChamado(req, res) {
        try {
            const { id } = req.params;
            const aberto = false;
            const chamado = await IChamado.update({ aberto }, { where: { id } })
            res.status(200).json("Chamado atualizado com sucesso.")
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Lista todos os chamados do banco de dados
    async listarTodosChamados(req, res) {
        try {
            const chamados = await IChamado.findAll({ order: [['id', 'ASC']] }) // OU 'DESC' - DESCRECENTE
            if (!chamados) {
                res.status(401).json("Não há nenhum chamado")
            }
            res.status(200).json(chamados)

        } catch (error) {
            res.status(400).json({ error })
        }

    },

    // Lista os chamado do banco de dados com o campo aberto = true 
    async listarChamadosAbertos(req, res) {
        try {
            console.log('entrei')
            const chamados = await IChamado.findAll({
                where: { aberto: true }, // atributos
                order: [['id', 'DESC']] //literal 'id', ordem 'DESC'
            }) // OU 'ASC PARE ORDEM CRESCENTE
            if (!chamados) {
                res.status(401).json("Não há nenhum chamado")
            }else{
            res.status(200).json(chamados)
            }

        } catch (error) {
            res.status(400).json({error})
        }
    },
     // Lista os chamado do banco de dados com o campo status = ABERTO 
     async listarChamadosComStatusAberto(req, res) {
        try {
            const chamados = await IChamado.findAll({
                where: { status:'ABERTO' }, // atributos
                order: [['id', 'DESC']] //literal 'id', ordem 'DESC'
            }) // OU 'ASC PARE ORDEM CRESCENTE
            res.status(200).json(chamados)

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // Método para deletar chamado
    async deletarChamado(req, res) {
        try {
            const { id } = req.params;
            const chamado = await IChamado.findOne({ where: { id } })
            if (!chamado) {
                res.status(401).json("Chamado não encontrado")
            } else {
                await IChamado.destroy({ where: { id } })
                res.status(200).json("Chamado deletado com sucesso")
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async chamadosPorSetor(req, res) {
        console.log('chequei no setor')
        const { setor, dataInicial, dataFinal } = req.body;
        // const data=['2022-07-01 00:00:00.000-03', '2022-08-06 00:00:00.000-03']
        // pesquisa toda a tabela chamado pelo nome do setor passado e  intervalo de data
        const { count: size, rows: solicitacoes } = await IChamado.findAndCountAll({
            where:
            {
                setor, // nome do setor a ser pesquisado
                createdAt: {

                    [Op.between]: [dataInicial, dataFinal], // intervalo de tempo a ser pesquisado
                    //[Op.between]: data,
                }, // intervalo de tempo a ser pesquisado
            }
        })
        //const {count:size, rows:solicitacoes} = await IChamado.findAndCountAll({where:{setor:nomeSetor}})

        // se a busca não retornar vazia entra no if caso contrario entra no else
        if (size) {
            const nome = solicitacoes[0].setor
            res.status(200).json({ nome, size })
        } else {
            const nome = 'sem dados'
            res.status(200).json({ nome, size })
        }

    },

    async chamadosPorSuport(req, res) {
        const { equipesuport, dataInicial, dataFinal } = req.body;
        // const data=['2022-07-01 00:00:00.000-03', '2022-08-06 00:00:00.000-03']
        // pesquisa toda a tabela chamado pelo nome do setor passado e  intervalo de data
        const { count: size, rows: solicitacoes } = await IChamado.findAndCountAll({
            where:
            {
                equipesuport: equipesuport, // nome do setor a ser pesquisado
                createdAt: {

                    [Op.between]: [dataInicial, dataFinal], // intervalo de tempo a ser pesquisado
                    //[Op.between]: data,
                }, // intervalo de tempo a ser pesquisado
            }
        })
        //const {count:size, rows:solicitacoes} = await IChamado.findAndCountAll({where:{setor:nomeSetor}})

        // se a busca não retornar vazia entra no if caso contrario entra no else
        if (size) {
            const nome = solicitacoes[0].equipesuport
            res.status(200).json([nome, size])
        } else {
            const nome = 'sem dados'
            res.status(200).json([nome, size])
        }

    },


    async chamadosPorTipoEquipamento(req, res) {
        const { equipamentocomdefeito, dataInicial, dataFinal } = req.body;
        // const data=['2022-07-01 00:00:00.000-03', '2022-08-06 00:00:00.000-03']
        // pesquisa toda a tabela chamado pelo nome do setor passado e  intervalo de data
        const { count: size, rows: solicitacoes } = await IChamado.findAndCountAll({
            where:
            {
                equipamentocomdefeito, // nome do setor a ser pesquisado
                createdAt: {

                    [Op.between]: [dataInicial, dataFinal], // intervalo de tempo a ser pesquisado
                    //[Op.between]: data,
                }, // intervalo de tempo a ser pesquisado
            }
        })
        //const {count:size, rows:solicitacoes} = await IChamado.findAndCountAll({where:{setor:nomeSetor}})

        // se a busca não retornar vazia entra no if caso contrario entra no else
        if (size) {
            const nome = solicitacoes[0].equipamentocomdefeito
            res.status(200).json([ nome, size ])
        } else {
            const nome = 'sem dados'
            res.status(200).json([ nome, size ])
        }

    },


    async chamadosPorTomboEquipamento(req, res) {
        const { equipamentotombo } = req.body;
        //const {count:size, rows:solicitacoes} = await IChamado.findAndCountAll({where:{nome:'HELDER'}})
        const { count: size, rows: solicitacoes } = await IChamado.findAndCountAll({ where: { equipamentotombo } })
        res.status(200).json(size + ' ' + solicitacoes[0].equipamentotombo)

    },

    async chamadosPorNumeroSerieEquipamento(req, res) {
        const { equipamentonumeroserie } = req.body;
        //const {count:size, rows:solicitacoes} = await IChamado.findAndCountAll({where:{nome:'HELDER'}})
        const { count: size, rows: solicitacoes } = await IChamado.findAndCountAll({ where: { equipamentonumeroserie } })
        res.status(200).json(size + ' ' + solicitacoes[0].equipamentonumeroserie)

    },
    
}

