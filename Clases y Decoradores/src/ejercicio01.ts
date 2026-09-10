// Ejercicio 1: Clase Producto
// Calcula el valor total del inventario (precio x cantidad)

class Producto {
  // Propiedades de la clase
  nombre: string;
  precio: number;
  cantidad: number;

  // Constructor para inicializar las propiedades
  constructor(nombre: string, precio: number, cantidad: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  // Método que calcula el valor total del inventario
  calcularValorTotal(): number {
    return this.precio * this.cantidad;
  }
}

// Creamos una instancia de Producto
const producto1 = new Producto("Laptop", 1500000, 3);

// Mostramos la información en consola
console.log("Producto:", producto1.nombre);
console.log("Precio:", producto1.precio);
console.log("Cantidad en inventario:", producto1.cantidad);
console.log("Valor total del inventario:", producto1.calcularValorTotal());
