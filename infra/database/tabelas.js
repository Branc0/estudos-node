class Tabelas {
    init(conexao) {
        // pega a conexão a passa para o escopo para que ela possa ser utilizada no criarAtendimentos
        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarPets();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Atendimentos criada com sucesso');
            }
        })
    }

    criarPets() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, image varchar(200), PRIMARY KEY(id))';
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Pets criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas