//Atividade 1
//Declarando variáveis e realizando operações básicas


//Opção 1

//Operação de Soma
let a = 2
let b = 5

console.log(`O resultado da soma de a e b é igual a ${a + b}`)


//Operação de Subtração
let c = 10
let d = 6

console.log(`O resultado da subtração de c e d é igual a ${c - d}`)

//Operação de Multiplicação
let e = 3
let f = 7

console.log(`O resultado da multiplicação de e e f é igual a ${e * f}`)

//Operação de Divisão
let g = 8
let h = 4

console.log(`O resultado da multiplicação de g e h é igual a ${g / h}`)



//Opção 2

const i = 3
const j = 5
const k = "1" // quando variável está entre aspas, a linguagem entende como sendo um valor string

//Soma
let l = i + j

console.log(`O resultado da soma entre ${i} e ${j} é ${l}`)

//Subtração
l = i - j // o let permite que seja atribuido novos valores para a variável

console.log(`O resultado da subtração entre ${i} e ${j} é ${l}`)

//Multiplicação
l = i * j

console.log(`O resultado da multiplicação entre ${i} e ${j} é ${l}`)

//Divisão
l = i / j
console.log(`O resultado da divisão entre ${i} e ${j} é ${l}`)




//Opção 3

function operacoesBasicas(m, n, op){
    let q
    switch (op) {
        case '+':
            q = m + n;
            break;
        case '-':
            q = m - n;
            break;
        case '*':
            q = m * n;
            break;
        case '/':
            q = m / n;
            break;
        default:
            break;
    }
    console.log(`O resultado da ${op} entre ${a} e ${b} é ${c}`)
}

operacoesBasicas(2, 3, '+')
operacoesBasicas(8, 1, '-')
operacoesBasicas(4, 6, '*')
operacoesBasicas(10, 5, '/')