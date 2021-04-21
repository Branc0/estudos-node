const connection = require('./conexao')

const runQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (errors, res, fields) => {
            if (errors) {
                reject(erros)
            } else {
                resolve(res)
            }
        });
    })
}

module.exports = runQuery