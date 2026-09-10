"use strict";
// Ejercicio 3: Simular carga de datos desde un servidor
// Usa setTimeout para esperar 3 segundos
// Retorna una Promise con un arreglo de nombres
function cargarDatosServidor() {
    return new Promise((resolve) => {
        // Simulamos una carga de datos que tarda 3 segundos
        setTimeout(() => {
            const usuarios = ["Carlos", "Laura", "Pedro", "María", "Juan"];
            resolve(usuarios);
        }, 3000);
    });
}
// Llamamos la función y mostramos los nombres con .then()
cargarDatosServidor().then((nombres) => {
    console.log("Usuarios cargados:");
    // Recorremos el arreglo e imprimimos cada nombre
    for (const nombre of nombres) {
        console.log("- " + nombre);
    }
});
//# sourceMappingURL=ejercicio03.js.map