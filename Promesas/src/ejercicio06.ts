// Ejercicio 6: Promise.all con tres Promises simultáneas
// Carga de usuarios, productos y pedidos

// Simula la carga de usuarios
function cargarUsuariosEj6(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Carlos", "Laura", "Pedro"]);
    }, 1000);
  });
}

// Simula la carga de productos
function cargarProductosEj6(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mouse", "Teclado"]);
    }, 1500);
  });
}

// Simula la carga de pedidos
function cargarPedidosEj6(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido #1", "Pedido #2", "Pedido #3"]);
    }, 2000);
  });
}

// Usamos Promise.all para ejecutar las tres funciones en paralelo
Promise.all([cargarUsuariosEj6(), cargarProductosEj6(), cargarPedidosEj6()])
  .then((resultados) => {
    // resultados es un arreglo con los tres resultados
    console.log("Usuarios:", resultados[0]);
    console.log("Productos:", resultados[1]);
    console.log("Pedidos:", resultados[2]);
    console.log("Todas las cargas terminaron al mismo tiempo.");
  });
