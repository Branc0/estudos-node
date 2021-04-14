const conexao = require('../infra/conexao')

class Atendimento { 
    adiciona(atendimento) {
        const sql = `INSERT INTO Atendimentos SET ?`

        conexao.query(sql, atendimento, (erro, resultados)=>{

        })
    }
}

module.exports = new Atendimento