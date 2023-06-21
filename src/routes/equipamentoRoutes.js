const { Router } = require('express')
const EquipamentoController = require('../controllers/EquipamentoController')
const router = Router()

//Inicio das rotas dos Equipamentos
//Rota para criar um novo Equipamento no banco de dados
router.post('/criarEquipamento', EquipamentoController.createEquipamento);

//Rota para alterar o campo ativo de true para false  do Equipamento, pelo id
router.put('/updateCampoAtivoEquipamento/:id', EquipamentoController.updateCampoAtivoEquipamento);

//Rota para listar todos os Equipamentos(ativos e finalizados) do banco de dados
router.get('/listarTodosEquipamentos', EquipamentoController.listarTodosEquipamentos);

//Rota para listar todos equipamento ativos
router.get('/listarEquipamentosAtivos', EquipamentoController.listarEquipamentosAtivos);

//Rota para deletar equipamento do banco de dados
router.delete('/deletarEquipamento/:id', EquipamentoController.deletarEquipamento);
//Fim das rotas dos Equipamentos



module.exports = router
