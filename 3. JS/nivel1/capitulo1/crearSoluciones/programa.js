/* --- Problema de los helados --- */
let btnHelados = document.getElementById('btnHelados');

btnHelados.addEventListener('click', function() {

	let dineroUsuario = prompt('Cualto dinero tiene?'),
		cambio = dineroUsuario;

	if (dineroUsuario < 0.6) {
		alert('Lo siento, pobre de mierda, no te alcanza para ningun helado');
	}
	else if (dineroUsuario >= 0.6 && dineroUsuario < 1) {
		alert('Compra el helado Palito en agua');
		cambio = dineroUsuario - 0.6;
		alert(`El cambio por su compra es $${cambio}`);
	}
	else if (dineroUsuario >= 1 && dineroUsuario < 1.6) {
		alert('Compra el helado Palito en crema');
		cambio = dineroUsuario - 1;
		alert(`El cambio por su compra es $${dineroUsuario - 1}`)
	}
	else if (dineroUsuario >= 1.6 && dineroUsuario < 1.7) {
		alert('Compra un Bombon Heladix');
		cambio = dineroUsuario - 1.6;
		alert(`El cambio por su compra es $${cambio}`);
	}
	else if (dineroUsuario >= 1.7 && dineroUsuario < 1.8) {
		alert('Compra un Bombon Heladovich');
		cambio = dineroUsuario - 1.7;
		alert(`El cambio por su compra es $${cambio}`);
	}
	else if (dineroUsuario >= 1.8 && dineroUsuario < 2.9) {
		alert('Compra un Bombon Helardo');
		cambio = dineroUsuario - 1.8;
		alert(`El cambio por su compra es $${cambio}`);
	}
	else if (dineroUsuario >= 2.9) {
		alert('Puedes comprar un Pote de helado pequenio con confites, o un Pote de helado de 1/4 KG');
		cambio = dineroUsuario - 2.9;
		alert(`El cambio por su compra es $${cambio}`);
	}

	else {
		alert('Porfavor, dime tu dinero correctamente');
	}
});