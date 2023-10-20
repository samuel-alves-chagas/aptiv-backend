const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema({
    logradouro: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    bairro: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cidade: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    estado: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cep: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    pais: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const UnidadeSchema = new Schema({
    nome: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    endereco: {
        type: EnderecoSchema,
        required: [true,'*Campo obrigatório!']
    },
    id_responsavel: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    numero_funcionarios: {
        type: Number,
        required: [true,'*Campo obrigatório!']
    },
    data_abertura: {
        type: Date,
        required: [true,'*Campo obrigatório!']
    },
    departamentos: {
        type: [String],
        required: [true,'*Campo obrigatório!']
    }
});

const Unidade = mongoose.model('Unidade', UnidadeSchema);
module.exports = Unidade;