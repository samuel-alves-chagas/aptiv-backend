const Colaborador = require('../models/colaboradorModel');

exports.Login = function(req, res, next) {
  const registroRecebido = req.body.registro
  const senhaRecebida = req.body.senha

  Colaborador.find({registro: registroRecebido}).then(function(colaborador){
    console.log(colaborador, senhaRecebida)

    if(colaborador.senha == senhaRecebida) {
      return res.send(200);
    }
    return res.send(400)
  }).catch((err) => {
    console.log(err)
  });


}