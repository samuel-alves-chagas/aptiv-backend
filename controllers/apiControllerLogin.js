const Colaborador = require('../models/colaboradorModel');

exports.Login = function(req, res, next) {
  const registroRecebido = req.body.registro
  const senhaRecebida = req.body.senha

  Colaborador.find({registro: registroRecebido, senha: senhaRecebida}).then(function(colaborador){
    if(colaborador[0]) {
      return res.json(colaborador[0]).send(200);
    }
    return res.json({error:"Registro ou senha inválidos"}).status(404).send()
  }).catch((err) => {
    console.log(err)
    next()
  });
}