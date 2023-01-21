/* El problema de las llaves */

/* ---- ---- Preparativos previos ---- ---- */

const contenedorLlaves = document.getElementById('contenedorLlaves');

/* ---- ---- Clases ---- ---- */

class Llave {
	constructor(nombre, modelo, precio) {
		this.nombre = nombre;
		this.modelo = modelo;
		this.precio = precio;
	}
}

/* ---- ---- Funciones ---- ---- */

const crearLlave = (nombre, modelo, precio) => {

	// Crear Objeto
	const llave = new Llave(nombre, modelo, precio);

	// Crear Elemento HTML
	const articulo = document.createElement('ARTICLE');

	articulo.classList.add('articulo'); 

	const formulario = document.createElement('FORM'),
		  titulo = document.createElement('H2'),
		  imagen = document.createElement('IMG'),
		  tituloSecundario = document.createElement('H3'),
		  parrafo = document.createElement('P'),
		  btnEnviar = document.createElement('INPUT');

	titulo.classList.add('titulo');
	titulo.textContent = llave.nombre;

	imagen.classList.add('img-llave');
	imagen.setAttribute('src', 'media/llave.jpg');
	imagen.setAttribute('alt', `${llave.nombre}`);

	tituloSecundario.classList.add('titulo-secundario');
	tituloSecundario.textContent = `Modelo: ${llave.modelo}`;

	parrafo.classList.add('parrafo');
	parrafo.textContent = `Precio: $${llave.precio}`;

	btnEnviar.classList.add('btn-enviar');
	btnEnviar.setAttribute('type', 'submit');
	btnEnviar.setAttribute('value', 'Comprar');

	// Unir Elementos HTML
	const fragmento = document.createDocumentFragment();

	formulario.appendChild(titulo);
	formulario.appendChild(imagen);
	formulario.appendChild(tituloSecundario);
	formulario.appendChild(parrafo);
	formulario.appendChild(btnEnviar);

	articulo.appendChild(formulario);

	return articulo;

}

const agregarLlaves = (datos) => {
	// Preparacion previa
	let elementosHTML = [], nuevoElemento = null;
	const fragmento = document.createDocumentFragment();

	// Obtener y guardar los elementos en un Array
	const keys = Object.keys(datos); // ['llave1', 'llave2', 'llave3' ... 'llaveN']
	
	for (key of keys) {
		const array = datos[key]; // ['Nombre Llave', 'Modelo', 'Precio']
		
		nuevoElemento = crearLlave(array[0], array[1], array[2]);

		elementosHTML.push(nuevoElemento);
	}

	// Agregar todos los elementos al documento

	for (i in elementosHTML) {
		fragmento.appendChild(elementosHTML[i]);
	}

	contenedorLlaves.appendChild(fragmento);

	return 'Fueron agregados! :)'
}

/* ---- ---- Datos ---- ---- */

const datos = {
	llave1: ['Llave 1', 'XML-34', 35],
	llave2: ['Llave 2', 'FGL-12', 29],
	llave3: ['Llave 3', 'FHL-74', 33],
	llave4: ['Llave 4', 'JDD-45', 21],
	llave5: ['Llave 5', 'GRL-12', 46],
	llave6: ['Llave 6', 'FEL-45', 46],
	llave7: ['Llave 7', 'FRG-31', 62],
	llave8: ['Llave 8', 'DEG-32', 78],
	llave9: ['Llave 9', 'UKL-21', 37],
	llave10: ['Llave 10', 'HYL-48', 21],
	llave11: ['Llave 11', 'XML-34', 35],
	llave12: ['Llave 12', 'FGL-12', 29],
	llave13: ['Llave 13', 'FHL-74', 33],
	llave14: ['Llave 14', 'JDD-45', 21],
	llave15: ['Llave 15', 'GRL-12', 46],
	llave16: ['Llave 16', 'FEL-45', 46],
	llave17: ['Llave 17', 'FRG-31', 62],
	llave18: ['Llave 18', 'DEG-32', 78]
}

agregarLlaves(datos);