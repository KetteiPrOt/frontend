let btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (event) => {
	event.preventDefault();
	for (let i = 1; i < 6; i++) {
		let seleccionar = document.getElementById(`seleccionar${i}`);
		seleccionar.outerHTML = seleccionar.value;
	}
});