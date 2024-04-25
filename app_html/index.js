const express         = require('express');
const mustacheExpress = require ('mustache-express');//criei o renderizador e requeri ele
const app             = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html'); //definindo o renderizador html que será utilziado
app.set('views', __dirname + `/views`);

app.get('/', function(req,res){
    let nome = "Juliana"; // Substituir o nome por consultarNomeUsuario e criar uma função que busque o nome no banco
    let data = new Date();
    res.render('index.html', {nome, data});
})

app.get('/contato', function(req,res){
    res.render('contato.html');
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT)
})