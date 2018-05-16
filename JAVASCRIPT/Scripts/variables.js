function CambiarTexto() {
	/*Cambiar el texto de un elemento
	con id = Resultado del documento HTML
	*/

	var miParrafo;

	miParrafo = document.getElementById('Resultado');
	miParrafo.innerHTML = "Texto Cambiado <br>";


	valor = 8;
	miParrafo.innerHTML +=
		"Sumando valor = " + (valor++) + "<br>";

	valor = 8;
	miParrafo.innerHTML +=
		"Sumando valor = " + (++valor) + "<br>";
}