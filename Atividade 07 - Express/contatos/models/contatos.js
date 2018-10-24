var listaContatos = {
    "contatos": [
        {
            "id": 1,
            "nome": "João",
            "email": "joao@gmail.com",
            "telefone": "88993215678"
        },

        {
            "id": 2,
            "nome": "Maria",
            "email": "maria@gmail.com",
            "telefone": "88991237856"
        },

        {
            "id": 3,
            "nome": "José",
            "email": "jose@gmail.com",
            "telefone": "88985227739"
        }
    ]
};

var listaContatosJSON = JSON.stringify(listaContatos);
module.exports.listaContatos = listaContatos;