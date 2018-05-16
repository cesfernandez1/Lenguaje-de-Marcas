function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}

function RealizarOperacion(tipoOperacion) {

	var valor1,
		valor2,
		valor;

		valor1 = ObtenerOperando('Operando1');
		valor2 = ObtenerOperando('Operando2');
		if(tipoOperacion == '+')
			valor = valor1 + valor2;
		else if(tipoOperacion == '-')
			valor = valor1 - valor2;
		else if(tipoOperacion == '*')
			valor = valor1 * valor2;
		else if (tipoOperacion == '/')
			valor = valor1 / valor2;
		else 
			valor = 0;


		document.getElementById('Resultado').innerHTML = valor;



}