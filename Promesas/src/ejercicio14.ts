// Ejercicio 14: Promise.all con tiempos de respuesta diferentes
// Carga de usuarios, productos y pedidos

// Simula carga de usuarios (tarda 1 segundo)
function cargarUsuariosEj14(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Carlos", "Laura", "Pedro"]);
    }, 1000);
  });
}

// Simula carga de productos (tarda 2 segundos)
function cargarProductosEj14(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mouse", "Teclado"]);
    }, 2000);
  });
}

// Simula carga de pedidos (tarda 3 segundos)
function cargarPedidosEj14(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido #1", "Pedido #2", "Pedido #3"]);
    }, 3000);
  });
}

// Ejecutamos las tres promesas simultáneamente con Promise.all
Promise.all([cargarUsuariosEj14(), cargarProductosEj14(), cargarPedidosEj14()])
  .then((resultados) => {
    // resultados[0] = usuarios, resultados[1] = productos, resultados[2] = pedidos
    console.log("=== Carga completada ===");
    console.log("Usuarios:", resultados[0]);
    console.log("Productos:", resultados[1]);
    console.log("Pedidos:", resultados[2]);
  })
  .catch((error) => {
    // Manejo de errores con catch
    console.log("Error al cargar datos:", error);
  });
