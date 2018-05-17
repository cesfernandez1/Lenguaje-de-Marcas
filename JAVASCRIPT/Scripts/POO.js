class Contacto {
	//n = Nombre | t = Telefono
	constructor(n,t){
		this.nombre = n;
		this.telefono = t;
	}
	Escribir(){
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML = 
					"Nombre:" + this.nombre + "<br>" +
					"Telefono:" + this.telefono + "<br>";
	}
	CambiarTelefono(nuevoT){

		this.telefono = nuevoT;
	}
}


function CrearContacto() {
	
	var c1 = new Contacto("Pepe", 1111);
	var c2 = new Contacto("Ana", 3333);

	c1.Escribir();
}