var express = require('express');
var contatosRouter = require('../route/contatosRoute.js');

//	Exportando	módulo	(Padrão	CommonJS)	
module.exports = function () {
	var app = express();

	//Definindo	variável	de	aplicação	
	app.set("port", 3000);
	contatosRouter.getContatos(app);
	app.use(express.static("./public"));
	return app;
};	