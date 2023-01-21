/* ---- ---- La nueva calculadora ---- ---- */

class Calculardora {
	constructor() {
		this.serie = null;
	}

	static sumar(a, b) {
		return a + b;
	}

	static restar(a, b) {
		return a - b;
	}

	static multiplicar(a, b) {
		return a * b;
	}

	static dividir(a, b) {
		return a / b;
	}

	static potencia(numero, exponente) {
		let resultado = 1;

		for (let i = 0; i < exponente; i++) {
			resultado = resultado * numero;
		}

		return resultado;
	}

	static raizCuadrada(a) {
		return Math.sqrt(a);
	}

	static raizCubica(a) {
		return Math.cbrt(a);
	}
}

/* ---- ---- Listado de Clases ---- ---- */

const asignaturas = {
	fisica: ['Random1', 'Pedro', 'Juan', 'Pedro', 'Pepito', 'Cofla'],
	programacion: ['Random2', 'Pedro', 'Juan', 'Pedro', 'Pepito', 'Cofla'],
	logica: ['Random3', 'Pedro', 'Juan', 'Pedro', 'Pepito'],
	quimica: ['Random4', 'Pedro', 'Juan', 'Pedro', 'Pepito']
}

const detallesAula = (materia) => {
	let n = asignaturas[materia].length,
		informacion = 'Clase: ' + materia + '\n';

	for (let i = 0; i < n; i++) {
		informacion += asignaturas[materia][i] + '\n';
	} 

	return console.log(informacion);
};

const encontrarAlumno = (alumno) => {
	let array = [],
		resultado = `El alumno ${alumno} esta inscrito en: `,
		inscrito = false;

	let llaves = Object.keys(asignaturas); // [fisica, programacion, logica, quimica]

	for (llave of llaves) {
		if (asignaturas[llave].includes(alumno)) {
			array.push(llave);

			if (!inscrito) {
				inscrito = true;
			}
		}
	}

	let n = array.length, primero = true;

	for (i = 0; i < n; i++) {
		if (i == n - 1) {
			resultado += ` y ${array[i]}.`;
		} else if (primero) {
			resultado += array[i];
			primero = false;
		} else {
			resultado += `, ${array[i]}`;
		}
	}

	if (inscrito) {
		return resultado;
	} else {
		return 'El alumno no esta inscrito en ninguna materia, o no escribio bien el nombre.';
	}	
};

/* ---- ---- Sistema de inscripciones ---- ---- */

const inscribirse = (alumno, materia) => {
	listaAlumnos = asignaturas[materia];

	if (listaAlumnos) {
		if (listaAlumnos.length >= 20) {
			console.log('No puedesinscribirte porque ya hay ' + listaAlumnos.length + ' alumnos, y el maximo es de 20.');
		} else {
			asignaturas[materia].push(alumno);
			console.log('Te has inscrito con exito!');
		}
	} else {
		console.log('Escribe correctamente el nombre de la materia.');
	}
}