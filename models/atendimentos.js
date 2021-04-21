const moment = require('moment');
const conexao = require('../infra/conexao');

// responsabilidade de realizar as querys no banco
class Atendimento {
    adiciona(atendimento, res) {
        // cria em uma variável a data atual do momento de criação do registro no BD
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        // Pega a data submetida pelo usuário e converte ela
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        // uso o spread operator para copiar todos os dados do objeto original e envio novos atributos
        atendimento = { ...atendimento, data, dataCriacao };


        // Validações
        const isValidDateExpression = moment(data).isSameOrAfter(dataCriacao);

        // const validacoes = [ 
        //  {
        //      name: 'data',
        //      valido: validDateExpression,
        //      mensagem: 'Data deve ser maior ou igual a data atual'
        //  }
        // ]

        // const errors = validacoes.filter(campo => !campo.valido)

        if (!isValidDateExpression) {
            res.status(400).json('Data deve ser maior ou igual a data atual');
        }
        // o ponto de interrogação no final da query, tem o papel de ser wildcard, vai representar o que iremos passar de valor no próximo parâmetro
        const sql = `INSERT INTO Atendimentos SET ?`;
        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                // retornamos como resposta o erro em forma de JSON e adicionamos tambem o status
                res.status(400).json(erro);
            } else {
                // retornamos como resposta o resultado em forma de JSON
                res.status(201).json(dados);
            }
        })
    }

    lista(res) {
        const query = 'SELECT * FROM Atendimentos'
        conexao.query(query, (erro, resultados) => {
            if (erro) {
                res.status(500).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    busca(id, res) {
        const query = `SELECT * FROM Atendimentos WHERE id=${id}`
        conexao.query(query, (erro, resultados) => {
            if (erro) {
                res.status(500).json(erro);
            } else {
                resultados = resultados[0];
                res.status(200).json(resultados);
            }
        })
    }

    edita(id, dados, res) {
        const query = `UPDATE Atendimentos SET ? WHERE id=${id}`

        if (dados.data) {
            dados.data = moment(dados.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }

        conexao.query(query, dados, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                resultados = resultados[0];
                res.status(200).json(dados);
            }
        })
    }
}

module.exports = new Atendimento