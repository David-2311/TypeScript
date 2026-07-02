function verificarEdad(nombre: string, edad: number): string {

    if (edad >= 18) {
        return `${nombre} es mayor de edad.`;
    } else {
        return `${nombre} es menor de edad.`;
    }

}

console.log(verificarEdad("David", 19));
console.log(verificarEdad("Juan", 16));