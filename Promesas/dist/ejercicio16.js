"use strict";
// Ejercicio 16: Generator que filtre números pares de un arreglo
// Recibe un arreglo y produce solo los pares
function* filtrarPares(numeros) {
    for (const num of numeros) {
        if (num % 2 === 0) {
            yield num; // Solo produce números pares
        }
    }
}
// Arreglo de ejemplo
const misNumeros = [1, 2, 3, 4, 5, 6];
// Creamos el generator
const genNumerosParesEj16 = filtrarPares(misNumeros);
// Recorremos con for...of
for (const par of genNumerosParesEj16) {
    console.log(par);
}
//# sourceMappingURL=ejercicio16.js.map