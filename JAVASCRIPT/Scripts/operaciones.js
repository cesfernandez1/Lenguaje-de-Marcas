function ObtenerOperando(idOperando) {
	
	var miOperando,
		valorOp;

		miOperando = document.getElementById(idOperando);
		return parseInt(miOperando.value);
}




function Sumar() {
	var 
		 miResultado,
		 valorOperando1,
		 valorOperando2,
		 valorSuma;


		 miResultado = document.getElementById('Resultado');
		 valorOperando1 = ObtenerOperando('Operando1');
		 valorOperando2 = ObtenerOperando('Operando2');
		 valorSuma = valorOperando1 + valorOperando2;
		 miResultado.innerHTML = valorSuma;

	
}