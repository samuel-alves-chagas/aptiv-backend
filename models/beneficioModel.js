const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeneficioSchema = new Schema({
    nome: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    descricao: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    tipo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const Beneficio = mongoose.model('Beneficio', BeneficioSchema);
module.exports = Beneficio;