const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColaboradorSchema = new Schema({
    nome: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cargo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    departamento: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const Colaborador = mongoose.model('Colaborador', ColaboradorSchema);
module.exports = Colaborador;