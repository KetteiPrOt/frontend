let estudiantes = {
	dato1: ['Nombre 1', 'example1@gmail.com', 'Materia 1'],
	dato2: ['Nombre 2', 'example2@gmail.com', 'Materia 2'],
	dato3: ['Nombre 3', 'example3@gmail.com', 'Materia 3'],
	dato4: ['Nombre 4', 'example4@gmail.com', 'Materia 4'],
	dato5: ['Nombre 5', 'example5@gmail.com', 'Materia 5']
}

const crearSelect = () => {
	// crear select y option
	let seleccionar = document.createElement('SELECT');

	for (let i = 1; i <= 5; i++) {
		let opcion = document.createElement('OPTION');

		opcion.textContent = `Semana ${i}`;
		opcion.setAttribute('value', `sem${i}`);
		seleccionar.setAttribute('id', `elemento${i}`);
	}

	return seleccionar;
}

const crearCeldas = (datos) => {
	let fragmento = document.createDocumentFragment();

	let keys = Object.keys(datos);

	for (key of keys) {
		let	road = document.createElement('TR'),
			dataCell1 = document.createElement('TD'),
			dataCell2 = document.createElement('TD'),
			dataCell3 = document.createElement('TD'),
			dataCell4 = document.createElement('TD');

		// Rellenar los datos
		dataCell1.textContent = datos[key][0];
		dataCell2.textContent = datos[key][1];
		dataCell3.textContent = datos[key][2];
		dataCell4.appendChild(crearSelect());

		road.appendChild(dataCell1);
		road.appendChild(dataCell2);
		road.appendChild(dataCell3);
		road.appendChild(dataCell4);
		fragmento.appendChild(road);
	}

	let cuerpoTabla = document.getElementById('cuerpoTabla');

	cuerpoTabla.appendChild(fragmento);
}

crearCeldas(estudiantes);