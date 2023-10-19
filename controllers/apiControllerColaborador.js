const Colaborador = require('../models/colaboradorModel');

exports.getColaborador = function (req, res, next) {
    Colaborador.find({_id: req.params.id}).then(function(colaborador){
        res.send(colaborador);
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