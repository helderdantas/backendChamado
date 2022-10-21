const { Router } = require('express')
const ChamadoController = require('./controllers/ChamadoController')
const EquipamentoController = require('./controllers/EquipamentoController')
const EquipeSuportController =require('./controllers/EquipeSuportController')
const SetorController = require('./controllers/SetorController')
const SubSetorController =require('./controllers/SubSetorController')
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

//Rota para deletar chamado do banco de dados
router.delete('/deletarChamado/:id', ChamadoController.deletarChamado);

//Listar chamados atendidos por setor
router.post('/chamadosPorSetor', ChamadoController.chamadosPorSetor);

//Listar chamados atendidos por tipo de equipamento
router.post('/chamadosPorTipoEquipamento', ChamadoController.chamadosPorTipoEquipamento);

//Listar chamados atendidos por tombo do equipamento
router.post('/chamadosPorTomboEquipamento', ChamadoController.chamadosPorTomboEquipamento);

//Listar chamados atendidos por suport
router.post('/chamadosPorSuport', ChamadoController.chamadosPorSuport);
//Fim das rotas dos chamados


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



//Inicio das rotas das EquipeSuports
//Rota para criar um novo EquipeSuport no banco de dados
router.post('/criarEquipeSuport', EquipeSuportController.createEquipeSuport);

//Rota para alterar o campo ativo de true para false  do EquipeSuport, pelo id
router.put('/updateCampoAtivoEquipeSuport/:id', EquipeSuportController.updateCampoAtivoEquipeSuport);

//Rota para listar todos os EquipeSuport(ativos e finalizados) do banco de dados
router.get('/listarTodosEquipeSuport', EquipeSuportController.listarTodosEquipeSuports);

//Rota para listar todos equipeSuport ativos
router.get('/listarEquipeSuportAtivos', EquipeSuportController.listarEquipeSuportsAtivo);

//Rota para deletar equipeSuport do banco de dados
router.delete('/deletarEquipeSuport/:id', EquipeSuportController.deletarEquipeSuport);
//Fim das rotas dos EquipeSuports


//Inicio das rotas dos Setores
//Rota para criar um novo Setores no banco de dados
router.post('/criarSetor', SetorController.createSetor);

//Rota para alterar o campo ativo de true para false  do Setor, pelo id
router.put('/updateCampoAtivoSetor/:id', SetorController.updateCampoAtivoSetor);

//Rota para listar todos os Setores(ativos e finalizados) do banco de dados
router.get('/listarTodosSetores', SetorController.listarTodosSetores);

//Rota para listar todos Setores ativos
router.get('/listarSetoresAtivos', SetorController.listarSetoresAtivo);

//Rota para deletar Setor do banco de dados
router.delete('/deletarSetor/:id', SetorController.deletarSetor);
//Fim das rotas dos Setores



//Inicio das rotas dos SubSetores
//Rota para criar um novo SubSetor no banco de dados
router.post('/criarSubSetor', SubSetorController.createSubSetor);

//Rota para alterar o campo ativo de true para false  do SubSetor, pelo id
router.put('/updateCampoAtivoSubSetor/:id', SubSetorController.updateCampoAtivoSubSetor);

//Rota para listar todos os SubSetores(ativos e finalizados) do banco de dados
router.get('/listarTodosSubSetores', SubSetorController.listarTodosSubSetores);

//Rota para listar todos SubSetores ativos
router.get('/listarSubSetoresAtivos', SubSetorController.listarSubSetoresAtivo);

//Rota para deletar SubSetor do banco de dados
router.delete('/deletarSubSetor/:id', SubSetorController.deletarSubSetor);
//Fim das rotas dos SubSetores

module.exports = router
