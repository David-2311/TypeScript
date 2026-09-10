// Ejercicio 9: Generator infinito de números consecutivos
// Comienza desde 1 y nunca se detiene
// Usamos next() manualmente para obtener los primeros 10 valores

function* numerosInfinitos(): Generator<number> {
  let i = 1;
  while (true) {
    yield i; // Nunca se detiene
    i++;
  }
}

// Creamos el generator
const genInfinito = numerosInfinitos();

// Obtenemos los primeros 10 valores manualmente con next()
console.log("Primeros 10 números infinitos:");
for (let j = 0; j < 10; j++) {
  const resultado = genInfinito.next();
  console.log("Valor:", resultado.value);
}
