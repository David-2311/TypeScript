"use strict";
// Ejercicio 11: Generator de la serie de Fibonacci
// Produce los primeros 10 valores
function* fibonacci() {
    let a = 0;
    let b = 1;
    for (let i = 0; i < 10; i++) {
        yield a; // Produce el valor actual
        const siguiente = a + b; // Calcula el siguiente
        a = b; // Actualiza a
        b = siguiente; // Actualiza b
    }
}
// Creamos el generator
const genFib = fibonacci();
// Recorremos con for...of
console.log("Serie de Fibonacci (primeros 10 valores):");
for (const valor of genFib) {
    console.log(valor);
}
//# sourceMappingURL=ejercicio11.js.map