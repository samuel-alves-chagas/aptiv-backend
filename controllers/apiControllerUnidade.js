const Unidade = require('../models/unidadeModel');

exports.getUnidade = function (req, res, next) {
    Unidade.find({_id: req.params.id}).then(function(unidade){
        res.send(unidade);
    }).catch(next);
};
 
exports.createUnidade = function (req, res, next) {
    Unidade.create(req.body).then(function(unidade){
        res.send(unidade);
    }).catch(next);
};

exports.updateUnidade = function (req, res, next) {
    Unidade.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Unidade.findOne({_id: req.params.id}).then(function(unidade){
            res.send(unidade);
        });
    }).catch(next);
};

exports.deleteUnidade = function (req, res, next) {
    Unidade.findByIdAndRemove({_id: req.params.id}).then(function(unidade){
      res.send(unidade);
    }).catch(next);
};