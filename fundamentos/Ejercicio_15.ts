let estudiantes: [number, string, number][] = [

    [1, "Juan", 4.2],
    [2, "María", 4.8],
    [3, "Carlos", 3.9]

];

let mejor = estudiantes[0];

for (let estudiante of estudiantes) {

    console.log(`Id: ${estudiante[0]}
Nombre: ${estudiante[1]}
Promedio: ${estudiante[2]}`);

    if (estudiante[2] > mejor[2]) {
        mejor = estudiante;
    }

}

console.log(`El mejor estudiante es ${mejor[1]} con promedio ${mejor[2]}`);