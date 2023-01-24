/*
1.- Crear una vista simple del formulario
2.- Validar con JS

- Nombre y correo tangan: Minimo 10 y Maximo 50 caracteres
- Que el Email contenga '@'
- Que nombre y correo tengan algo en el value
- Que materia no tenga value ' '
*/

let nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    materia = document.getElementById('materia'),
    enviar = document.getElementById('enviar'),
    nombreError = document.getElementById('nombreError'),
    emailError = document.getElementById('emailError'),
    materialError = document.getElementById('materialError'),
    enviarError = document.getElementById('enviarError');

enviar.addEventListener('click', (event) => {
    let valido = true;

    if (nombre.value == '') {
        event.preventDefault();
        valido = false;
        nombreError.textContent = '*Completa el nombre';
    } else if (nombre.value.length < 10) {
        event.preventDefault();
        valido = false;
        nombreError.textContent = '*El nombre debe tener minimo 10 caracteres';
    } else if (nombre.value.length > 50) {
        event.preventDefault();
        valido = false;
        nombreError.textContent = '*El nombre puede tener maximo 50 caracteres';
    } else {
        nombreError.textContent = '';
        valido = true;
    }

    if (email.value == '') {
        event.preventDefault();
        valido = false;
        emailError.textContent = '*Completa el email';
    } else if (!(email.value.includes('@'))) {
        event.preventDefault();
        valido = false;
        emailError.textContent = '*Escribe un email valido';
    } else if (email.value.length < 10) {
        event.preventDefault();
        valido = false;
        emailError.textContent = '*El email debe tener minimo 10 caracteres';
    } else if (email.value.length > 50) {
        event.preventDefault();
        valido = false;
        emailError.textContent = '*El email puede tener maximo 50 caracteres';
    } else {
        emailError.textContent = '';
        valido = true;
    }

    if (materia.value == '') {
        event.preventDefault();
        valido = false;
        materiaError.textContent = '*Selecciona una materia';
    } else {
        materiaError.textContent = '';
        valido = true;
    }

    if (!valido) {
        enviarError.textContent = '*Completa correctamente los campos';
    }
});
