const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('voce esá na rota de atendimento e esá realizando um GET'));

    app.get('', (req, res) => res.send('acesso a rota Inicial'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento);
    })
}