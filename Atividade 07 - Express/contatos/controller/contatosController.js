var contatosModule = require('../models/contatos.js')
var listaContatos = contatosModule.listaContatos.contatos;

//controller é quem está retornando todos os contatos
module.exports.getContatos = function (req, res) {
    res.json(listaContatos);
}
