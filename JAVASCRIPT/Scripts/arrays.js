function CrearElemento() {
	
	var miTabla = new Array();
	var resultado;

	resultado = document.getElementById('Resultado');

	miTabla[0] = "Pedro";
	miTabla[1] = "Ana";
	
	miTabla[2] = "Pedro";
	
	miTabla[3] = "juan";
	
	for (var i = 0; i < miTabla.length; i++) {
		resultado.innerHTML += miTabla[i] + " "; 
	}


	


}