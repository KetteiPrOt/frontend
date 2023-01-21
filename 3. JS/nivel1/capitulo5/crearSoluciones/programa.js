/* ---- ---- El primer semestre de Cofla ---- ---- */
const btnPrimerSemestre = document.getElementById('btnPrimerSemestre');

class Materia {
	constructor(nombre, asistencia, notaFinal, proyectos) {
		this.nombre = nombre;
		this.asistencia = asistencia;
		this.notaFinal = notaFinal;
		this.proyectos = proyectos;
	}
}

const calculo = new Materia('Calculo de 1 variable', 0.9, 75, 4),
	  algebra = new Materia('Algebra Lineal', 0.9, 80, 4),
	  funTI = new Materia('Fundamentos de TI', 0.5, 50, 3),
	  programacion = new Materia('Fundamentos de Programacion', 0.9, 95, 4),
	  comunicacion = new Materia('Comunicacion y Lenguaje', 0.5, 50, 3);

let materias = [calculo, algebra, funTI, programacion, comunicacion];

btnPrimerSemestre.addEventListener('click', funcion = () => {
	
	// asistencia, nota final, entrega de proyectos
	for (materia of materias) {
		let aprobado = true,
			informacion = '',
			detalles = '';

		if (materia['asistencia'] < 0.9) {
			aprobado = false;
			detalles += `Tienes ${materia['asistencia'] * 100}% de asistencias, no cumples con el minimo.`;
		}

		if (materia['notaFinal'] < 70) {

			if (aprobado) {
				aprobado = false;
			} else {
				detalles += ' ';
			}

			detalles += `Posee ${materia['notaFinal']} puntos... nesecitas minimo 70 para aprobar.`;
		}

		if (materia['proyectos'] < 4) {

			if (aprobado) {
				aprobado = false;
			} else {
				detalles += ' ';
			}

			detalles += `Has presentado ${materia['proyectos']} de 4 proyectos... para aprobar debes entregarlos todos.`
		}

		if (aprobado) {
			informacion = `Cofla aprueba ${materia['nombre']}.` + `\n` +
						  `Con una nota final de ${materia['notaFinal']}/100 puntos.` + `\n` +
						  `Una asistencia del ${materia['asistencia'] * 100}%, y todos los proyectos entregados.`;

			console.log(`%c${informacion}`, 'color: #40ff40');
			console.log(`%cFELICIDADES!!!`, 'font-size: 20px; color: green;')
		} else {
			informacion = `Cofla reprueba ${materia['nombre']}.` + `\n`;
			informacion += detalles;

			console.log(`%c${informacion}`, 'color: #ff2020');
			console.log(`%cUna pena, fallaste... continuar?`, 'font-size: 20px; color: #df0000');
		}

	}

});

/* ---- ---- El horario semanal ---- ---- 
Trabajar 8 horas por dos semanas:
- tiempo total = (8h / 1d) * (14d) = 112h
- estudiar = 24h
- trabajos practicos = 24h
- trabajar = 56h
- tareas de la casa = 8h
- total tareas = (24+24+56+8)h = 112h

Tiempsos diarios:
- estudiar = 1h30min
- descanso1 = 15min
- proyectos = 1h30min
- descanso2 = 15min
- trabajar = 4h
- tareas de la casa = 30min
*/

/* Funciones */
const convertirMin = (minutos) => {
	if (minutos < 60) {
		return minutos + 'min';
	} else {
		let horas, sobra;
		// Dato de prueba: 90
		horas = Math.trunc(minutos / 60); // 1
		sobra = (minutos / 60) - horas; // 1.5 - 1 = 0.5
		minutos = sobra * 60; // 0.5 * 60 = 30

		if (minutos > 0) {
			return `${horas}h${minutos}min`;
		} else {
			return `${horas}h`;
		}
	}
}
/* Fin funciones */

/* Programa pincipal */
class Dia {
	constructor(estudiar, proyectos, trabajo, limpiezaCasa, descanso) {
		this.estudiar = estudiar;
		this.proyectos = proyectos;
		this.trabajo = trabajo;
		this.limpiezaCasa = limpiezaCasa;
		this.descanso = descanso;
	}
}

const btnHorario = document.getElementById('btnHorario');

btnHorario.addEventListener('click', funcion = () => {
	let hoy = null;

	for (let i = 1; i <= 14; i++) {
		hoy = new Dia(90, 90, 240, 30, 15);

		console.groupCollapsed(`%cDia ${i}`, 'color: #1d00ff');

		console.info(`%cEstudiar ${convertirMin(hoy['estudiar'])}.`, 'color: #00a2ff');
		console.info(`%cDescansar ${convertirMin(hoy['descanso'])}.`, 'color: #00ff9e');
		console.info(`%cHacer Proyectos ${convertirMin(hoy['proyectos'])}.`, 'color: #00a2ff');
		console.info(`%cDescansar ${convertirMin(hoy['descanso'])}.`, 'color: #00ff9e');
		console.info(`%cTrabajar ${convertirMin(hoy['trabajo'])}.`, 'color: #00a2ff');
		console.info(`%cLimpiar ${convertirMin(hoy['limpiezaCasa'])}.`, 'color: #00a2ff');

		console.groupEnd();
	}
});
/* Fin del programa */