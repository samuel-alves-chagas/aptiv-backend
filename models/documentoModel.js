const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentoSchema = new Schema({
    funcionario_id: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    tipo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    data: {
        type: Object,
        required: [true,'*Campo obrigatório!']
    },
    url_arquivo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const Documento = mongoose.model('Documento', DocumentoSchema);
module.exports = Documento;