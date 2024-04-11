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

module.exports={
    verificarNumeroPrimo
}