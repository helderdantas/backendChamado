const { Router } = require('express')
const EquipeSuportController =require('../controllers/EquipeSuportController')
const router = Router()

//Inicio das rotas das EquipeSuports
//Rota para criar um novo EquipeSuport no banco de dados
router.post('/criarEquipeSuport', EquipeSuportController.createEquipeSuport);

//Rota para alterar o campo ativo de true para false  do EquipeSuport, pelo id
router.put('/updateCampoAtivoEquipeSuport/:id', EquipeSuportController.updateCampoAtivoEquipeSuport);

//Rota para atualizar o campo telefone do EquipeSuport, pelo id
router.put('/updateTelefoneEquipeSuport/:id', EquipeSuportController.updateTelefoneEquipeSuport);

//Rota para listar todos os EquipeSuport(ativos e finalizados) do banco de dados
router.get('/listarTodosEquipeSuport', EquipeSuportController.listarTodosEquipeSuports);

//Rota para listar todos equipeSuport ativos
router.get('/listarEquipeSuportAtivos', EquipeSuportController.listarEquipeSuportsAtivo);

//Rota para deletar equipeSuport do banco de dados
router.delete('/deletarEquipeSuport/:id', EquipeSuportController.deletarEquipeSuport);
//Fim das rotas dos EquipeSuports



module.exports = router
