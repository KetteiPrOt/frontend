class Usuario {
    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }
}



const datos = {
    usuario1: new Usuario('Joel', 'Mero', 'Frontend'),
    usuario2: new Usuario('Rancio', 'Perez', 'Backend'),
    usuario3: new Usuario('Lusisillo', 'Gordillo', 'Debugger'),
    usuario4: new Usuario('Kamila', 'Nensa', 'Dvops')
}

const mostrarUsuario = (usuario) => {
    let { nombre } = usuario,
        { apellido } = usuario,
        { rol } = usuario;


    let informacion = `Soy ${nombre} ${apellido}, trabajo como ${rol}`;

    console.log(informacion);
}

export { Usuario, datos, mostrarUsuario };