class Contacto {
	//n = Nombre | t = Telefono
	constructor(n,t,d){
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;
	}
	Escribir(elementoHTML){
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML += 
					"Nombre:" + this.nombre + "<br>" +
					"Telefono:" + this.telefono + "<br>"
					"Direccion:" + this.direccion + "<br>"
	}

	EscribirNombre(elementoHTML){
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML += "Nombre" + this.nombre + "<br>";
	}
	CambiarTelefono(nuevoT){

		this.telefono = nuevoT;
	}
	CambiarNombre(NuevoN){
		this.nombre = NuevoN;
	}
	CambiarDireccion(NuevoD){
		this.direccion = NuevoD;
	}
}

class ListaContactos{
	constructor(n,t,d){
		this.nContactos = 0;
		this.lista = new Array(5);
		
	}

	InsertarContacto(n,t,d){
		var contacto = new Contacto(n, t, d);

		this.lista[this.nContactos] = contacto;
		this.nContactos ++;
	}

	EscribirNombres(elementoHTML){

		var resultado = document.getElementById(elementoHTML);
		resultado.innerHTML = "";		
		for(var i=0; i< this.nContactos; i++){
			this.lista[i].EscribirNombre(elementoHTML);
		}
	}
}

var miLista = new ListaContactos();

function InsertarContactoLista() {
	var miNombre, miDireccion, miTelefono;

	miNombre = document.getElementById('nombre').value;
	miTelefono = document.getElementById('telefono').value;
	miDireccion = document.getElementById('direccion').value;

	miLista.InsertarContacto(miNombre, miTelefono, miDireccion);
	miLista.EscribirNombres('ListaContactosNombre')
}




