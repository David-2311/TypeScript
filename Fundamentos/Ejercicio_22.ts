function promedio(nombre: string, ...calificaciones: number[]): void {

    let suma: number = 0;

    for (let nota of calificaciones) {

        suma += nota;

    }

    let promedio = suma / calificaciones.length;

    console.log(`El estudiante ${nombre} obtuvo un promedio de ${promedio}`);

}

promedio("David", 4.5, 3.8, 4.2, 5.0);