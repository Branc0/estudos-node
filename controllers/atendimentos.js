module.exports = app => {
    app.get('/atendimentos', (req,res)=> res.send('voce esá na rota de atendimento e esá realizando um GET'))

    app.post('/atendimentos', (req,res)=> res.send('VOcê está na rota de atendimento e está fazendo um post'))
}