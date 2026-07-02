function sumar(numeros: number[]): number {

    let suma: number = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return suma;
}

let arreglo: number[] = [10, 20, 30, 40];

console.log(`La suma es: ${sumar(arreglo)}`);