"use strict";
// Ejercicio 2: Función que valida la edad de una persona
// Si es mayor de edad resuelve, si no rechaza
// Recibe la edad y retorna una Promise
function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            // Si tiene 18 o más, la promesa se resuelve
            resolve("Acceso permitido");
        }
        else {
            // Si es menor de 18, la promesa se rechaza
            reject("Acceso denegado: eres menor de edad");
        }
    });
}
// Probamos con edad 20 (resuelve)
validarEdad(20)
    .then((mensaje) => {
    console.log(mensaje);
})
    .catch((error) => {
    console.log(error);
});
// Probamos con edad 15 (rechaza)
validarEdad(15)
    .then((mensaje) => {
    console.log(mensaje);
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=ejercicio02.js.map