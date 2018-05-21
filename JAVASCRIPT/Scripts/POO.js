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
	CambiarNombre(NuevoN){
		this.nombre = NuevoN;
	}
}
var c1;

function CrearContacto() {
	
	c1 = new Contacto("Pepe", 1111);

	c1.Escribir();
}

function ModificarContacto() {
	var valorNombre,
		valorTelefono;

		valorNombre = document.getElementById('nombre').value;
		valorTelefono = document.getElementById('telefono').value;
		c1.CambiarNombre(valorNombre);
		c1.CambiarTelefono(valorTelefono);
		c1.Escribir();



}