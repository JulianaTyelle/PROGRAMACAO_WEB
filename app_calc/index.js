const express         = require('express');
const mustacheExpress = require ('mustache-express');//criei o renderizador e requeri ele
const app             = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html'); //definindo o renderizador html que será utilziado
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use('/', require('./src/routes/calculadoraRoutes'));

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT)
})