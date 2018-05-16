function CalcularDia() {
	
	var campoResultado,
		fechaActual,
		diaActual;

		campoResultado = document.getElementById('Resultado');
		fechaActual = new Date();
		diaActual = fechaActual.getDay();

		switch(diaActual)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				campoResultado.innerHTML = "Entre semana";
				break;
			case 6:
			case 0:
				campoResultado.innerHTML = "Fin de semana";
				break;
			default: 
				campoResultado.innerHTML = "Dia no valido";
				break;
		}
}