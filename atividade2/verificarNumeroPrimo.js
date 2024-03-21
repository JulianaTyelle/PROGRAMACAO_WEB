//Atividade 2
//Identificação de números primos

function verificarNumeroPrimo(n){ //divisivel por 1 e por ele mesmo e não pode ser por mais nenhum 0 e 1 não são primos

    if(n <= 1){
        return false
    }

    if( (n != 2) && (n % 2 == 0)){ //resto da divisao (%) for igual a zero. nós identificamos um número par. E com exceção do 2, qualquer número par não é primo
        return false
    }

    for(let i = 3; i < n; i += 2){
        if(n% i == 0){
            return false
        }
    }
    
    return true
}

console.log(`0 - ${verificarNumeroPrimo(0)}`)
console.log(`1 - ${verificarNumeroPrimo(1)}`)
console.log(`2 - ${verificarNumeroPrimo(2)}`)
console.log(`4 - ${verificarNumeroPrimo(4)}`)
console.log(`7 - ${verificarNumeroPrimo(7)}`)
console.log(`83 - ${verificarNumeroPrimo(83)}`)
console.log(`100 - ${verificarNumeroPrimo(100)}`)
console.log(`991 - ${verificarNumeroPrimo(991)}`)
console.log(`104729 - ${verificarNumeroPrimo(104729)}`)
console.log(`14348907 - ${verificarNumeroPrimo(14348907)}`)
