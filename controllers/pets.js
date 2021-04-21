const Pets = require('../models/pets')

module.exports = app => {

    app.get('/pets', (req, res) => {
        Pets.lista(res);
    })

    app.post('/pets', (req, res) => {
        Pets.adiciona(req.body, res);
    })
}