const query = require('../infra/database/queries')

class Atendimento {
    create(atendimento) {
        const query = `INSERT INTO Atendimentos SET ?`
        return query(query, atendimento)
    }
}

module.exports = new Atendimento()