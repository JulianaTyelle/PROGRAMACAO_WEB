//Aula 2
//Funções


//Exemplo 1 - essa função não é a melhor

function imprimirOperacao(){
	let a = 2 //atribui valor à variável
	let b = 3 //atribui valor à variàvel
	console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
}
imprimirOperacao(); //chama a função 


//Exemplo 2
function imprimirOperacaoV2(a, b){ //argumento de função 
	console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
}
imprimirOperacaoV2(1,2); 
imprimirOperacaoV2("1", "4"); //entre aspas ele entende que é string


//Exemplo 3
function imprimirOperacaoV3(a, b, op){ //argumento de função 
	let c;
	switch(op){ //escolha baseada em um caso
		case '+':
			c = a + b;
			break;
		case '-':
			c = a - b;
			break;
		case '*':
			c = a + b;
			break;
		case '/':
			c = a + b;
			break;
		default:
			break;
}

	console.log(`O resultado da ${op} entre ${a} e ${b} é ${c}`);
}
imprimirOperacaoV3(1,2, '+'); 
imprimirOperacaoV3(1,2, 'a'); //nessa tentativa o retorno é "undefined" pois não foi definido nenhum valor para a
