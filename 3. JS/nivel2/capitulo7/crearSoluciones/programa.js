/* ---- ---- La nueva PC de Cofla ---- ---- */

const newPc = document.getElementById('newPc');

newPc.addEventListener('click', function() {
	let Y = window.screen.height,
		X = window.screen.width;

	const confirmacion = window.confirm(
		`La pantalla de la PC tiene una resolucion de ${X}x${Y} pixels... la quieres comprar?`
	);

	if (confirmacion) {
		alert('Felicidades! Has comprado la nueva computadora.');
	} else {
		alert('Vuelve pronto.');
	}
});



/* ---- ---- Fallos de la Pantalla Completa ---- ---- */

const badFullScreen = document.getElementById('badFullScreen');

badFullScreen.addEventListener('click', function() {
	// protolagarto es el contenedor html
	const protolagarto = document.getElementById('protolagarto');

	const datos = {
		url: window.location.href,
		protocolo: window.location.protocol,
		hostname: window.location.hostname,
		puerto: window.location.port
	}

	let tabla = document.createElement('TABLE'),
		fragmento = document.createDocumentFragment();

	let llaves = Object.keys(datos); // ['url', 'protocolo', 'hostname', 'puerto']

	for (llave of llaves) {
		let columna = document.createElement('TR'),
			celda1 = document.createElement('TD'),
			celda2 = document.createElement('TD'),
			negrita = document.createElement('STRONG');

		negrita.textContent = llave
		celda1.appendChild(negrita);

		celda2.textContent = datos[llave];

		columna.appendChild(celda1);
		columna.appendChild(celda2);

		fragmento.appendChild(columna);
	}

	tabla.classList.add('tabla');
	tabla.appendChild(fragmento);

	protolagarto.appendChild(tabla);
});