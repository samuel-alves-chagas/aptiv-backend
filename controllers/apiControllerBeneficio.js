const Beneficio = require('../models/beneficioModel');

exports.getBeneficio = function (req, res, next) {
    Beneficio.find({_id: req.params.id}).then(function(beneficio){
        res.send(beneficio);
    }).catch(next);
};

exports.getAllBeneficios = function (req, res, next) {
    Beneficio.find().then(function(beneficios){
        res.send(beneficios);
    }).catch(next);
};
 
exports.createBeneficio = function (req, res, next) {
    Beneficio.create(req.body).then(function(beneficio){
        res.send(beneficio);
    }).catch(next);
};

exports.updateBeneficio = function (req, res, next) {
    Beneficio.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Beneficio.findOne({_id: req.params.id}).then(function(beneficio){
            res.send(beneficio);
        });
    }).catch(next);
};

exports.deleteBeneficio = function (req, res, next) {
    Beneficio.findByIdAndRemove({_id: req.params.id}).then(function(beneficio){
      res.send(beneficio);
    }).catch(next);
};