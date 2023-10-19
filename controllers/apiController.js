const Colaborador = require('../models/colaboradorModel');

exports.details = function (req, res) {
    res.send({type: 'GET'});
};
 
exports.create = function (req, res, next) {
    console.log('You made a POST request: ', req.body);
    Colaborador.create(req.body).then(function(colaborador){
        res.send(colaborador);
    }).catch(next);
};

exports.update = function (req, res) {
    res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
};