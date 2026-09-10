// Ejercicio 1: Crear una función que retorne una promesa
// La promesa se resuelve después de 2 segundos

// Función que retorna una Promise
function promesaSimple(): Promise<string> {
  return new Promise((resolve) => {
    // Espera 2 segundos (2000 milisegundos) y luego resuelve la promesa
    setTimeout(() => {
      resolve("Proceso completado correctamente");
    }, 2000);
  });
}

// Llamamos la función y mostramos el resultado con .then()
promesaSimple().then((mensaje) => {
  console.log(mensaje);
});
