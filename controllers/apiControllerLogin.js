const Colaborador = require('../models/colaboradorModel');

exports.Login = function(req, res, next) {
  const registroRecebido = req.body.registro
  const senhaRecebida = req.body.senha

  Colaborador.find({registro: registroRecebido, senha: senhaRecebida}).then(function(colaborador){
    if(colaborador[0]) {
      return res.send(200);
    }
    return res.json({error:"Registro ou senha inválidos"}).send(404)
  }).catch((err) => {
    console.log(err)
    next()
  });
}