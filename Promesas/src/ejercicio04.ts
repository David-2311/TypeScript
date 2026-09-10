// Ejercicio 4: Encadenamiento de promesas
// Obtener números, calcular cuadrados, mostrar resultados

// Función que retorna una promesa con un arreglo de números
function obtenerListaNumeros(): Promise<number[]> {
  return new Promise((resolve) => {
    const numeros: number[] = [1, 2, 3, 4, 5];
    resolve(numeros);
  });
}

// Encadenamiento de promesas con .then()
obtenerListaNumeros()
  // Primer .then: recibimos el arreglo de números
  .then((numeros) => {
    console.log("Números originales:", numeros);
    return numeros; // Retornamos para el siguiente .then()
  })
  // Segundo .then: calculamos el cuadrado de cada número
  .then((numeros) => {
    const cuadrados = numeros.map((n) => n * n);
    console.log("Cuadrados calculados:", cuadrados);
    return cuadrados;
  })
  // Tercero .then: mostramos cada cuadrado por separado
  .then((cuadrados) => {
    console.log("Resultado final:");
    for (const c of cuadrados) {
      console.log("Cuadrado: " + c);
    }
  });
