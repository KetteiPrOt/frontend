/* ---- ---- La tienda de celulares ---- ---- */

let btnTiendaCelulares = document.getElementById('btnTiendaCelulares'),
	celular1,
	celular2,
	celular3;

class Celulares {

	constructor(modelo, color, peso, resPantalla, resCamara, ram) {
		this.modelo = modelo;
		this.color = color;
		this.peso = peso;
		this.resPantalla = resPantalla;
		this.resCamara = resCamara;
		this.ram = ram;
		this.encendido = false;
	}

	encender() {
		console.log(`${this.modelo} encendido.`)
		return this.encendido = true;
	}

	apagar() {
		console.log(`${this.modelo} apagado.`)
		return this.encendido = false;
	}

	reiniciar() {
		if(this.encendido) {
			console.log(`${this.modelo} reiniciado.`);
			this.encendido = false;
			return this.encendido = true;				
		} else {
			return console.log('El telefono esta apagado.')	
		}
	}

	tomarFoto() {
		return console.log('Foto tomada en ' + this.resCamara);
	}

	grabarVideo() {
		return console.log('Video guardado en ' + this.resCamara);
	}

	mostrarInfo() {
		let informacion = `Modelo: ${this.modelo}             ` + '\n' +
		                  `Color: ${this.color}             ` + '\n' +
		                  `Peso: ${this.peso}             ` + '\n' +
		                  `Pantalla: ${this.resPantalla}             ` + '\n' +
		                  `Camara: ${this.resCamara}             ` + '\n' +
		                  `Memoria RAM: ${this.ram}             `;
		return informacion;
	}
	
}

btnTiendaCelulares.addEventListener('click', function() {

	celular1 = new Celulares('A30', 'blue', 230, '1080px', '13mp', '4GB');
	celular2 = new Celulares('A50', 'red', 250, '1080px', '15mp', '4GB');
	celular3 = new Celulares('A70', 'black', 230, '1440px', '15mp', '8GB');

	console.log(celular1.mostrarInfo());
	console.log(celular2.mostrarInfo());
	console.log(celular3.mostrarInfo());

});


/* ---- ---- Los celulares de Alta Gama ---- ---- */

let btnAltaGama = document.getElementById('btnAltaGama'),
	a80, s20;

class CelularesAltaGama extends Celulares {

	constructor(modelo, color, peso, resPantalla, resCamara, resCamara2, ram){
		super(modelo, color, peso, resPantalla, resCamara, ram);
		this.resCamaraSecundaria = resCamara2;
	}

	grabarVideoLento() {
		return console.log('Video lento guardado en ' + this.resCamara);
	}

	reconocimientoFacial() {
		return console.log('Acceso autorizado');
	}

	mostrarInfo() {
		let informacion = `Modelo: ${this.modelo}             ` + '\n' +
		                  `Color: ${this.color}             ` + '\n' +
		                  `Peso: ${this.peso}             ` + '\n' +
		                  `Pantalla: ${this.resPantalla}             ` + '\n' +
		                  `Camara: ${this.resCamara}             ` + '\n' +
		                  `Camara Extra: ${this.resCamaraSecundaria}             ` + '\n' +
		                  `Memoria RAM: ${this.ram}             `;
		return informacion;
	}

}

btnAltaGama.addEventListener('click', function() {

	a80 = new CelularesAltaGama('A80', 'black', 220, '1440px', '16mp','8mp', '8GB');
	s20 = new CelularesAltaGama('S20', 'black', 240, '1440px', '20mp','15mp', '8GB');

	console.log(a80.mostrarInfo());
	console.log(s20.mostrarInfo());

});


/* ---- ---- Los Juegos de la Play Store ---- ---- */
class Aplicacion {

	constructor(nombre, descargas, puntuacion, peso) {
		this.nombre = nombre;
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.instalado = false;
		this.abierta = false;
	}

	instalar() {

		if (this.instalado) {
			return console.log(`${this.nombre} ya esta instalado`);
		} else {
			this.instalado = true;
			return console.log(`${this.nombre} instalado`);
		}
		
	}

	abrir() {

		if (this.instalado & (!this.abierta)) {
			this.abierta = true;
			return console.log(`${this.nombre} fue abierto`);
		} else if (this.instalado & this.abierta) {
			return console.log(`${this.nombre} ya fue abierto`);
		} else if (!this.intalado) {
			return console.log(`${this.nombre} aun no ha sido instalado`);
		}

	}

	cerrar() {

		if (this.instalado & this.abierta) {
			this.abierta = false;
			return console.log(`${this.nombre} fue cerrado`);
		} else if (this.instalado & (!this.abierta)) {
			return console.log(`${this.nombre} no esta abierta`);
		} else if (!this.instalado) {
			return console.log(`${this.nombre} aun no ha sido instalado`);
		}

	}

	desinstalar() {

		if (this.instalado) {
			this.instalado = false;
			return console.log(`${this.nombre} fue desinstalado`);
		} else {
			return console.log(`${this.nombre} no esta instalado`);
		}

	}

	mostrarInfo() {
		let informacion = `Nombre: ${this.nombre}             ` + '\n' +
		                  `Descargas: ${this.descargas}             ` + '\n' +
		                  `Puntuacion: ${this.puntuacion}             ` + '\n' +
		                  `Peso: ${this.peso}             `;
		return informacion;
	}

}

let btnJuegos = document.getElementById('btnJuegos'),
	juego1, juego2;

btnJuegos.addEventListener('click', function() {

	juego1 = new Aplicacion('Survivalcraft', 120000, 4.5, '120mb');
	juego2 = new Aplicacion('Minecraft', 100000000, 4.5, '300mb');

	console.log(juego1.mostrarInfo());
	console.log(juego2.mostrarInfo());

});