const moment = require('moment')
const conexao = require('../infra/conexao')

// responsabilidade de realizar as querys no banco
class Atendimento {
    adiciona(atendimento) {
        // const dataCriacao = new Date();
        // const data = moment()
        // o ponto de interrogação no final da query, tem o papel de ser wildcard, vai representar o que iremos passar de valor no próximo parâmetro
        const sql = `INSERT INTO Atendimentos SET ?`
        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Atendimento