"use strict";
// Ejercicio 18: Sistema de procesamiento de tareas en orden
// Generator produce tareas, cada una se ejecuta con Promise
// Función que ejecuta una tarea con tiempo de ejecución simulado
function ejecutarTarea(nombre, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${nombre} terminada`);
        }, tiempo);
    });
}
// Generator que produce una secuencia de tareas
function* tareasGenerator() {
    yield "Tarea 1";
    yield "Tarea 2";
    yield "Tarea 3";
}
// Función principal que procesa las tareas en orden
function procesarTareas() {
    const genTareas = tareasGenerator();
    // Ejecutamos cada tarea de forma secuencial
    function procesarSiguiente() {
        const resultado = genTareas.next();
        if (resultado.done) {
            // Si el generator terminó, mostramos mensaje final
            console.log("Todas las tareas completadas.");
            return;
        }
        const tarea = resultado.value;
        console.log(tarea);
        // Ejecutamos la tarea y cuando termine, procesamos la siguiente
        ejecutarTarea(tarea, 1000).then((mensaje) => {
            console.log(mensaje);
            console.log("---");
            // Procesamos la siguiente tarea (así se respetan el orden)
            procesarSiguiente();
        });
    }
    // Iniciamos el procesamiento
    procesarSiguiente();
}
// Ejecutamos el sistema
procesarTareas();
//# sourceMappingURL=ejercicio18.js.map