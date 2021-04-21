const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.busca(id, res);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        // enviamos nossa instância de res para dentro da função assim conseguimos determinar um valor como resposta lá dentro
        Atendimento.adiciona(atendimento, res);
    })
}