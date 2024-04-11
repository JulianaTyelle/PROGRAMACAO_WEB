const express = require ('express');
const mat = require('./util/matematica');
const app = express();//construtor do express. Cria uma aplciação do tipo express

app.get('/', function(req, res){
    res.send('página inicial');
});

app.get('/ola', function(req, res){
    res.send('Olá, Mundo!');
});

app.get('/ola/:n', function(req, res){
    let n = req.params.n;
    res.send('Olá, Mundo!' + n);
});

app.get('/verificar-numero-primo/:n', function(req, res){
    let n = req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
});

const PORT = 8080; //a gente precisa de uma porta para acessar o servidor. Vamos usar 8080 por padrão
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
});

