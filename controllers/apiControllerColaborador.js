const Colaborador = require('../models/colaboradorModel');

exports.getColaborador = function (req, res, next) {
    Colaborador.find({_id: req.params.id}).then(function(colaborador){
        res.send(colaborador);
    }).catch(next);
};

exports.getAllColaboradores = function (req, res, next) {
    Colaborador.find().then(function(colaboradores){
        res.send(colaboradores);
    }).catch(next);
};
 
exports.createColaborador = function (req, res, next) {
    Colaborador.create(req.body).then(function(colaborador){
        res.send(colaborador);
    }).catch(next);
};

exports.updateColaborador = function (req, res, next) {
    Colaborador.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Colaborador.findOne({_id: req.params.id}).then(function(colaborador){
            res.send(colaborador);
        });
    }).catch(next);
};

exports.deleteColaborador = function (req, res, next) {
    Colaborador.findByIdAndRemove({_id: req.params.id}).then(function(colaborador){
      res.send(colaborador);
    }).catch(next);
};

exports.getBeneficioByColaborador = function(req, res, next) {
    Colaborador.findById({_id: req.params.id}).then(function(colaborador) {
        res.send(colaborador.remuneracao.beneficios);
    }).catch(next);
}

exports.getFeriasByColaborador = function(req, res, next) {
    Colaborador.findById({_id: req.params.id}).then(function(colaborador) {
        res.send(colaborador.ferias);
    }).catch(next);
}