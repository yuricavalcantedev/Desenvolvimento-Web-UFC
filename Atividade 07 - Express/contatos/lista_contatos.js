var contatosModule = require('./models/contatos.js')

var listaContatos = contatosModule.listaContatos.contatos;

for(var i = 0; i < listaContatos.length; i ++){
    console.log(listaContatos[i].id + " - " + listaContatos[i].nome + " " + listaContatos[i].email + " - " + listaContatos[i].telefone + "\n"); 
}