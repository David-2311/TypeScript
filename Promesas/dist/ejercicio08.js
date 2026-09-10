"use strict";
// Ejercicio 8: Generator que produzca números pares entre 0 y 20
// Usa yield y se recorre con un ciclo
function* numerosPares() {
    for (let i = 0; i <= 20; i += 2) {
        yield i; // Solo produce números pares
    }
}
// Creamos el generator
const genNumerosPares = numerosPares();
// Recorremos con for...of
for (const par of genNumerosPares) {
    console.log("Par:", par);
}
//# sourceMappingURL=ejercicio08.js.map