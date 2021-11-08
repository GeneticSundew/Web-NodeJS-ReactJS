const express = require('express');

const app = express();

app.use(express.json());

app.get('/dadospessoais', (req, res) => {
    res.send({ nome: 'Guilherme Lima',
               idade:  19,
               email: 'glima.gs20@gmail.com',
               profissao: 'Estudante'});
});

app.get('/formacao', (req, res) => {
    res.send([
   {instituicao: 'unip',
    curso: 'ciencia da computacao',
    situacao: 'cursando',
    semestre: 4},

   {instituicao: 'USA international',
    curso: 'ingles',
    situacao: 'cursando',
    semestre: 12}]);
});

app.get('/projetos', (req, res) => {
    res.send(['Até o momento n possuo projetos em produzidos']);
});

app.get('/experiencia', (req, res) => {
    res.send(['Até o momento nao possuo experiencia de trabalho']);
});

app.get('/lazer', (req, res) => {
    res.send([
   {nome: 'jogar video game',
    local: 'casa',
    tempo: 10},

   {nome: 'estudar',
    local: 'faculdade',
    tempo: 4}]);
});

app.post('/Inserircliente', (req, res) => {
    const{nome} = req.body;
    const{idade} = req.body;
    const{profissao} = req.body;
    const{email} = req.body;

    res.send(`Nome: ${nome} | Idade: ${idade} | Profissao: ${profissao} | Email: ${email}`);
});

app.put('/AlterarCliente/:id', (req, res) => {
    const{nome, idade, profissao, email, telefone} = req.body;

    res.send(`Nome: ${nome} | Idade: ${idade} | Profissao: ${profissao} | Email: ${email} | Telefone: ${telefone}`);
    res.send(`Atualizado com sucesso!`)
});

app.delete('/DeletarCliente/:id', (req, res) => {
    const {id} = req.params;
    
    res.send(`Cliente ${id} foi excluido com sucesso!`);
})

app.listen(2222, () =>{
    console.log('Backend Server ON');
});