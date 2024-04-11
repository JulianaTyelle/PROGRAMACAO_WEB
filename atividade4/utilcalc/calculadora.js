function operacoes(a, b, op){ //argumento de função 
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

	return c;
}

module.exports = {
	operacoes
}