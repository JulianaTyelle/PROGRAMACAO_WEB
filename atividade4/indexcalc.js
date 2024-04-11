const express = require ('express');
const calc    = require('./utilcalc/calculadora');
const app     = express();//construtor do express. Cria uma aplciação do tipo express


app.get('/calcular/:a/:b/:op', function(req, res){
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let op = String(req.params.op);
    let c = calc.operacoes(a,b,op);
    res.send(`${a} ${op} ${b} = ${Number(c)}`);
});

const PORT = 8080; //a gente precisa de uma porta para acessar o servidor. Vamos usar 8080 por padrão, mas pode ser qualquer porta
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
});