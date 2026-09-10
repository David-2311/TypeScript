// Ejercicio 13: Obtener usuarios desde una base de datos simulada
// Usa Promise, setTimeout, then, catch y plantillas de string

// Definimos el tipo de usuario
interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

// Función que simula una consulta a la base de datos
function obtenerUsuarios(): Promise<Usuario[]> {
  return new Promise((resolve, reject) => {
    // Simulamos una consulta que tarda 3 segundos
    setTimeout(() => {
      // Datos de usuarios
      const usuarios: Usuario[] = [
        { id: 1, nombre: "Juan", correo: "juan@gmail.com" },
        { id: 2, nombre: "Ana", correo: "ana@gmail.com" },
        { id: 3, nombre: "Pedro", correo: "pedro@gmail.com" },
      ];
      resolve(usuarios);
    }, 3000);
  });
}

// Llamamos la función y mostramos los datos con then()
obtenerUsuarios()
  .then((usuarios) => {
    for (const usuario of usuarios) {
      // Usamos plantillas de string para mostrar la información
      console.log(`Usuario: ${usuario.nombre}`);
      console.log(`Correo: ${usuario.correo}`);
      console.log("---");
    }
  })
  .catch((error) => {
    console.log("Error al obtener usuarios:", error);
  });
