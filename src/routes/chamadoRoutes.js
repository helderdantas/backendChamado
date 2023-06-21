const { Router } = require('express')
const ChamadoController = require('../controllers/ChamadoController')
const router = Router()

//Inicio das rotas do chamado

//Rota para criar um novo chamado no banco de dados
router.post('/criarChamado', ChamadoController.createChamado);

//Rota para atualizar um chamado pelo id
router.put('/updateChamado/:id', ChamadoController.updateChamado);

//Rota para alterar o campo ativo de true para false  do chamado, pelo id
router.put('/updateCampoAbertoChamado/:id', ChamadoController.updateCampoAbertoChamado);

//Rota para listar todos os chamados(abertos e finalizados) do banco de dados
router.get('/listarTodosChamados', ChamadoController.listarTodosChamados);

//Rota para listar todos chamados abertos
router.get('/listarChamadosAbertos', ChamadoController.listarChamadosAbertos);


//Rota para listar todos chamados com status aberto
router.get('/listarChamadosComStatusAberto', ChamadoController.listarChamadosComStatusAberto);

//Rota para deletar chamado do banco de dados
router.delete('/deletarChamado/:id', ChamadoController.deletarChamado);

//Listar chamados atendidos por setor
router.post('/chamadosPorSetor', ChamadoController.chamadosPorSetor);

//Listar chamados atendidos por tipo de equipamento
router.post('/chamadosPorTipoEquipamento', ChamadoController.chamadosPorTipoEquipamento);

//Listar chamados atendidos por tombo do equipamento
router.post('/chamadosPorTomboEquipamento', ChamadoController.chamadosPorTomboEquipamento);

//Listar chamados atendidos por tombo do equipamento
router.post('/chamadosPorNumeroSerieEquipamento', ChamadoController.chamadosPorNumeroSerieEquipamento);

//Listar chamados atendidos por suport
router.post('/chamadosPorSuport', ChamadoController.chamadosPorSuport);
//Fim das rotas dos chamados

module.exports = router