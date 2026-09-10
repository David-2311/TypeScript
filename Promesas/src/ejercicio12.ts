// Ejercicio 12: Generator con next(valor)
// Permite enviar información externa al generator

// Este generator genera números y permite modificar el siguiente valor
// enviando un valor por next(valor)
function* numerosConModificacion(): Generator<number> {
  let numero = 1;

  while (true) {
    // Yield entrega el número actual
    const modificacion = yield numero;

    // Si se envió un valor con next(valor), se suma al siguiente número
    if (typeof modificacion === "number") {
      numero += modificacion;
    } else {
      numero++;
    }
  }
}

// Creamos el generator
const genMod = numerosConModificacion();

// Primer next() inicia el generator y entrega el valor 1
console.log("Inicio:", genMod.next().value); // 1

// next(5) envía 5 al generator, el siguiente número será 1 + 5 = 6
console.log("Después de next(5):", genMod.next(5).value); // 6

// next(3) envía 3, el siguiente será 6 + 3 = 9
console.log("Después de next(3):", genMod.next(3).value); // 9

// next() sin valor, el siguiente será 9 + 1 = 10
console.log("Después de next():", genMod.next().value); // 10

// next(10) envía 10, el siguiente será 10 + 10 = 20
console.log("Después de next(10):", genMod.next(10).value); // 20
