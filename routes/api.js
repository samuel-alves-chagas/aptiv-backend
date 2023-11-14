const express = require ('express');
const router = express.Router();

const apiControllerColaborador = require('../controllers/apiControllerColaborador');
const apiControllerBeneficio = require('../controllers/apiControllerBeneficio');
const apiControllerDocumento = require('../controllers/apiControllerDocumento');
const apiControllerUnidade = require('../controllers/apiControllerUnidade');
const apiControllerLogin = require('../controllers/apiControllerLogin')

router.get('/colaborador/:id',apiControllerColaborador.getColaborador);
router.post('/colaborador',apiControllerColaborador.createColaborador);
router.put('/colaborador/:id',apiControllerColaborador.updateColaborador);
router.delete('/colaborador/:id',apiControllerColaborador.deleteColaborador);
router.get('/colaborador/beneficio/:id', apiControllerColaborador.getBeneficioByColaborador);
router.get('/colaborador',apiControllerColaborador.getAllColaboradores);
router.get('/colaborador/ferias/:id',apiControllerColaborador.getFeriasByColaborador);

router.get('/beneficio/:id',apiControllerBeneficio.getBeneficio);
router.post('/beneficio',apiControllerBeneficio.createBeneficio);
router.put('/beneficio/:id',apiControllerBeneficio.updateBeneficio);
router.delete('/beneficio/:id',apiControllerBeneficio.deleteBeneficio);

router.get('/documento/:id',apiControllerDocumento.getDocumento);
router.post('/documento',apiControllerDocumento.createDocumento);
router.put('/documento/:id',apiControllerDocumento.updateDocumento);
router.delete('/documento/:id',apiControllerDocumento.deleteDocumento);

router.get('/unidade/:id',apiControllerUnidade.getUnidade);
router.post('/unidade',apiControllerUnidade.createUnidade);
router.put('/unidade/:id',apiControllerUnidade.updateUnidade);
router.delete('/unidade/:id',apiControllerUnidade.deleteUnidade);

router.post('/login', apiControllerLogin.Login)

module.exports = router;