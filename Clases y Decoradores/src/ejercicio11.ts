// Ejercicio 11: Decorador de método
// Registra el nombre del método y los parámetros recibidos
// Se aplica a un método de una clase

// Definición del decorador de método
// target:原型 del prototipo
// propertyKey: nombre del método
// descriptor: descriptor del método (contiene la función original)
function registrarMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // Guardamos la función original
  const metodoOriginal = descriptor.value;

  // Sobreescribimos el método para registrar información antes de ejecutarlo
  descriptor.value = function (...args: any[]) {
    // Mostramos el nombre del método ejecutado
    console.log("Método ejecutado: " + propertyKey);

    // Mostramos los parámetros recibidos
    console.log("Parámetros: " + JSON.stringify(args));

    // Ejecutamos el método original
    const resultado = metodoOriginal.apply(this, args);

    return resultado;
  };
}

// Clase Compra con el método decorado
class Compra {
  items: { nombre: string; precio: number; cantidad: number }[];

  constructor() {
    this.items = [];
  }

  // Agregamos un artículo a la compra
  agregarItem(nombre: string, precio: number, cantidad: number): void {
    this.items.push({ nombre, precio, cantidad });
  }

  // Método decorado: calcula el total de la compra
  @registrarMetodo
  calcularTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.precio * item.cantidad;
    }
    console.log("Total de la compra: $" + total);
    return total;
  }
}

// Creamos una instancia de Compra
const compra1 = new Compra();

// Agregamos artículos
compra1.agregarItem("Laptop", 1500000, 1);
compra1.agregarItem("Mouse", 50000, 2);
compra1.agregarItem("Teclado", 120000, 1);

// Llamamos al método decorado
// El decorador mostrará el nombre y los parámetros antes de ejecutar
console.log("=== Calculando total ===");
const total = compra1.calcularTotal();
