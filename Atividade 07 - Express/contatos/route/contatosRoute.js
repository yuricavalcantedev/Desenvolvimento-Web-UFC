var express = require('express');
var contatosController = require('../controller/contatosController.js');

module.exports.getContatos = function (app) {
	app.get("/contatos", contatosController.getContatos);
}
