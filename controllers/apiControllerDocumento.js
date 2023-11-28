const Documento = require('../models/documentoModel');

exports.getDocumento = function (req, res, next) {
    Documento.find({_id: req.params.id}).then(function(documento){
        res.send(documento);
    }).catch(next);
};
 
exports.createDocumento = function (req, res, next) {
    Documento.create(req.body).then(function(documento){
        res.send(documento);
    }).catch(next);
};

exports.updateDocumento = function (req, res, next) {
    Documento.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Documento.findOne({_id: req.params.id}).then(function(documento){
            res.send(documento);
        });
    }).catch(next);
};

exports.deleteDocumento = function (req, res, next) {
    Documento.findByIdAndRemove({_id: req.params.id}).then(function(documento){
      res.send(documento);
    }).catch(next);
};

exports.getDocumentoByDataEColaborador = function(req, res, next) {
    const funcionario_id = req.body.funcionario_id
    const data = req.body.data

    Documento.find({funcionario_id: funcionario_id, data: data}).then(function(documento) {
        if(documento[0]) {
            return res.json(documento[0]).send(200);
        }
    }).catch(next);
}