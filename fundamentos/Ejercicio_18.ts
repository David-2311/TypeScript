type Usuario = {

    id: number;
    nombre: string;
    correo: string;
    activo: boolean;

};

function mostrarUsuario(usuario: Usuario): void {

    let { id, nombre, correo, activo } = usuario;

    console.log(`Id: ${id}
Nombre: ${nombre}
Correo: ${correo}
Activo: ${activo}`);

}

let usuario: Usuario = {

    id: 1,
    nombre: "David",
    correo: "david@gmail.com",
    activo: true

};

mostrarUsuario(usuario);