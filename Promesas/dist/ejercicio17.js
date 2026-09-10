"use strict";
// Ejercicio 17: Combinación de Promise + Generator
// Promise retorna números, Generator calcula cuadrados
// Función que retorna una Promise con un arreglo de números
function obtenerNumerosParaCuadrados() {
    return new Promise((resolve) => {
        const numeros = [1, 2, 3, 4, 5];
        resolve(numeros);
    });
}
// Generator que produce el cuadrado de cada número
function* calcularCuadrados(numeros) {
    for (const num of numeros) {
        yield num * num; // Produce el cuadrado
    }
}
// Primero obtenemos los números con la Promise
obtenerNumerosParaCuadrados().then((numeros) => {
    console.log("Números originales:", numeros);
    // Luego usamos el Generator para calcular cuadrados
    const genCuadrados = calcularCuadrados(numeros);
    // Recorremos el Generator con for...of
    console.log("Cuadrados:");
    for (const cuadrado of genCuadrados) {
        console.log(cuadrado);
    }
});
//# sourceMappingURL=ejercicio17.js.map