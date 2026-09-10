// Ejercicio 10: Generator que recibe un arreglo de nombres
// Produce los nombres uno por uno con next()

function* nombresGenerator(nombres: string[]): Generator<string> {
  for (const nombre of nombres) {
    yield nombre; // Produce cada nombre
  }
}

// Arreglo de nombres
const misNombres: string[] = ["Carlos", "Laura", "Pedro"];

// Creamos el generator
const genNombres = nombresGenerator(misNombres);

// Usamos next() para obtener cada nombre
console.log(genNombres.next().value); // Carlos
console.log(genNombres.next().value); // Laura
console.log(genNombres.next().value); // Pedro
