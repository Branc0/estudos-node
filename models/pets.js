const conexao = require('../infra/database/conexao')

class Pets {
    adiciona(dados, res) {
        const sql = `INSERT INTO Pets SET ?`
        conexao.query(sql, dados, (erro, resposta) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(dados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Pets'
        conexao.query(sql, dados, (erro, resposta) => {
            if (erro) {
                res.status(500).json(erro);
            } else {
                res.status(200).json(resposta);
            }
        })
    }
}

module.exports = new Pets()