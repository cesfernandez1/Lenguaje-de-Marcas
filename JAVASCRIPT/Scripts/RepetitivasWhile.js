function EscribirNumeros() {
	
	var campoResultado,
		numero,
		contador;

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);

	contador = 0;
	do{
		campoResultado.innerHTML += " " + contador++;
	}while(contador <= numero){
		
	}
}