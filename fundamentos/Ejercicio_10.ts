function mayorNumero(numeros: number[]): number {

    let mayor: number = numeros[0];

    for (let numero of numeros) {

        if (numero > mayor) {
            mayor = numero;
        }

    }

    return mayor;
}

let lista: number[] = [10, 25, 7, 80, 45];

console.log(`El número mayor es: ${mayorNumero(lista)}`);