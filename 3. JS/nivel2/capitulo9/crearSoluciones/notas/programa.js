class Materia {
	constructor(nombre, nota) {
		this.nombre = nombre;
		this.nota = nota;
	}
}

const materias = [
	new Materia('Tecnologias de IA', '76'),
	new Materia('Cloud Computing', '85'),
	new Materia('Arquitectura de Sistemas', '79'),
	new Materia('Emprendimiento', '83')
];


const pedirMateria = (i) => {
	let promesa, materia;

	const funcion = (resolve, reject) => {
		materia = materias[i];

		if (!materia) {
			reject('la materia buscada no existe');
		} else {
			let tiempo = Math.random() * 1000;
			// Resuelve la promesa en cierto tiempo de 1 a 200 milisegundos
			setTimeout(() => { resolve(materia) }, tiempo);
		}
	}

	promesa = new Promise(funcion);

	return promesa;
}

const mostrarMaterias = async () => {
	// Indica el estado
	const estado = document.getElementById('estado');
	estado.textContent = 'Ejecutando Consulta... por favor espere';

	try {
		// Consulta los datos
		let datos = [];

		for (let i = 0; i < 4; i++) {
			datos[i] = await pedirMateria(i);
		}

		console.log(datos);

		// Imprime los datos
		for (let i = 0; i < 4; i++) {
			const fila = document.getElementById(`fila${i}`),
				  nombre = fila.firstElementChild,
				  nota = fila.lastElementChild;

			let materia = datos[i];

			nombre.textContent = materia.nombre;
			nota.textContent = materia.nota;
		}

		// Finaliza la consulta
		estado.textContent = 'La consulta ha finalizado con exito!';
	} catch (error) {
		estado.textContent = `La consulta fracaso... ${error}`;
	}
		
}

mostrarMaterias();