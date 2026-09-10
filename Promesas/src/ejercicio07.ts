// Ejercicio 7: Generator que genere números del 1 al 5
// Usa yield y se recorre con for...of

// Creamos el generator con function*
function* numerosDelUnoAlCinco(): Generator<number> {
  for (let i = 1; i <= 5; i++) {
    yield i; // yield pausa y entrega el valor
  }
}

// Creamos el generator
const gen = numerosDelUnoAlCinco();

// Recorremos el generator con for...of
for (const numero of gen) {
  console.log("Número:", numero);
}
