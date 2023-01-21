/* --- Programa con Condicional --- */

let btnIf = document.getElementById('btnIf');

btnIf.addEventListener('click', function() {
	let contrasenia = prompt('Ingresa la contraseina (1234):');
	
	if (contrasenia === '1234') {
		alert('La contrasenia es correcta!');
	} 

	else if (contrasenia === 1234) {
		alert('La contrasenia tambien es correcta!');
	} 

	else {
		alert('Hast ingresado una contrasenia equivocada');
	}
});