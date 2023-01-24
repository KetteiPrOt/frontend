let dimensiones = document.getElementById('dimensiones'),
    profundidadPx = document.getElementById('profundidadPx'),
    btnComprar = document.getElementById('btnComprar');

 dimensiones.textContent = `${screen.height}x${screen.width}`; 
 profundidadPx.textContent = screen.pixelDepth;

 btnComprar.addEventListener('click', () => {
    let confirmacion = confirm('Seguro deseas elegir esta Pc?');

    if (confirmacion) {
        alert('Felicidades, has comprado la Pc!');
    } else {
        alert('Vuelva pronto');
    }
 });