/* --- --- Fiesta del sin Techo --- ---- */
let btnFiesta = document.getElementById('btnFiesta');

btnFiesta.addEventListener('click', () => {
	let paseGratis = false;

	const validarAsistente = (time) => {
		let edad = prompt('Cual es tu edad?');

		// Primera validacion
		if (edad >= 18) {
			// Segunda validacion
			if (time >= 2 && time < 7 && !paseGratis) {
				alert('Felicidades, puedes pasar gratis!');
				paseGratis = true
			} else {
				alert('Puedes pasar si pagas la entrada');
			}
		} else if (edad < 18) {
			alert('No puedes pasar, eres menor de edad MAQUINOLA');
		} else {
			alert('Porfavor, dime correctamente tu edad');
		}
	}

	validarAsistente(12);
	validarAsistente(1);
	validarAsistente(2.05);
	validarAsistente(3);
});


/* --- --- Asistencia de la Facultad --- ---- */
let btnAsistencia = document.getElementById('btnAsistencia');

btnAsistencia.addEventListener('click', () => {
	let numeroAlumnos = 3,
		alumnosTotales = [];

	// Solicita el nombre de los alumnos, y lo hace tantas veces como alumnos existan
	/*for (let i = 0; i < numeroAlumnos; i++) {
		alumnosTotales[i] = [
			prompt(`Escriba el nombre del alumno ${i + 1}`),
			0
		];
	}*/

	// Datos de Prueba
	alumnosTotales = [
		['Joel', 0],
		['Lucas', 0],
		['Cofla', 0]
	];

	
	// Guarda a cuantas clases asistieron los alumnos
	const tomarAsitencia = (nombre, indice) => {
		let asistencia = prompt(`Dia ${indice + 1}. Esta presente ${nombre}? (A = ausente, P = presente)`);

		if (asistencia == 'P') {
			let alumnoActual = alumnosTotales[indice]; // Accede al array [nombre, 0]
			alumnoActual[1]++; // Accede al 0 y le incrementa 1
			return true;
		}
		else if (asistencia == 'A') {
			return true;
		}
		else {
			alert('Ingreso mal un dato, vuelva a empezar!');
			return false;
		}
	}

	// Ejecuta la funcion N veces segun cuantos dias haya que tomar asistencias
	buclePrincipal:
	for (let i = 0; i < 3; i++) {
		for (elemento of alumnosTotales) {
			let datoIntegro = tomarAsitencia(elemento[0], i);
			if (!datoIntegro) {
				break buclePrincipal;
			}
		}
	}

	// Mostrar los resultados finales de presencia durante el periosdo
	for (elemento of alumnosTotales) {
		let nombre = elemento[0], asistencias = elemento[1];
		if (asistencias >= 20) {
			console.log(
				`${nombre} pesenta ${asistencias} asistencias. Y ${30 - asistencias} ausencias.` + '\n' +
				`El alumno aprueba.`
			);
		} else {
			console.log(
				`${nombre} pesenta ${asistencias} asistencias. Y ${30 - asistencias} ausencias.` + '\n' +
				`El alumno no aprueba.`
			);
		}
	}
});


/* --- --- Calculadora para Cofla --- ---- */
let btnCaluladora = document.getElementById('btnCalculadora');

btnCaluladora.addEventListener('click', () => {
	let operacion = parseInt(prompt('Selecciona la operacion: Suma (1) Resta (2) Multiplicacion (3) Division (4)')),
		operandoA = parseInt(prompt('Ingresa un valor A')),
		operandoB = parseInt(prompt('Ingresa un valor B'));

	if (operacion === 1) {
		alert(`${operandoA} + ${operandoB} = ${operandoA + operandoB}`);
	} 
	else if (operacion === 2) {
		alert(`${operandoA} - ${operandoB} = ${operandoA - operandoB}`);
	}
	else if (operacion === 3) {
		alert(`${operandoA} * ${operandoB} = ${operandoA * operandoB}`);
	}
	else if (operacion === 4) {
		alert(`${operandoA} / ${operandoB} = ${operandoA / operandoB}`);
	} else {
		alert('Porfavor, ingresa numeros validos');
	}
});