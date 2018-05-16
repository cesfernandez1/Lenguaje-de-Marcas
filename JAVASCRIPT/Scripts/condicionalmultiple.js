function CalcularEtapa() {
	var campoEdad,
		campoResultado,
		valorEdad;

		campoResultado = document.getElementById('Resultado');
		campoEdad = document.getElementById('Edad');
		valorEdad = parseInt(campoEdad.value);
		switch(valorEdad){
			case 12: 
			campoResultado.innerHTML = "Infancia";
				break;

			
		}
}