const express = require ('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/colaborador/:id',apiController.getColaborador);
router.post('/colaborador',apiController.createColaborador);
router.put('/colaborador/:id',apiController.updateColaborador);
router.delete('/colaborador/:id',apiController.deleteColaborador);

module.exports = router;