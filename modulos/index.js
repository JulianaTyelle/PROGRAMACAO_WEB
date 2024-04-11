const matriz = require('./util/matriz'); //recebe o modulo
const calc = require('./util/calculadora'); //importando o modulo calculadora

let B = [
    [1,2],
    [3,4],
    [5,6],
];

matriz.transporMatriz(B);

console.log(`PI = ` + calc.PI);
console.log(`2+3 = ` + calc.somar(2,3));