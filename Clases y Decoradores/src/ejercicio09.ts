// Ejercicio 9: Decorador que agrega una propiedad fechaCreacion
// Los decoradores se aplican con @ antes de la definición de la clase
// Se necesita experimentalDecorators en tsconfig.json

// Definición del decorador de clase
// Un decorador recibe el constructor de la clase y retorna un nuevo constructor
function agregarFechaCreacion<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    fechaCreacion = new Date().toLocaleString();
  };
}

// Aplicamos el decorador a la clase Orden con @
@agregarFechaCreacion
class Orden {
  id: number;
  producto: string;
  precio: number;

  constructor(id: number, producto: string, precio: number) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
  }

  mostrarOrden(): void {
    console.log("Orden #" + this.id);
    console.log("Producto: " + this.producto);
    console.log("Precio: $" + this.precio);
    // La propiedad fechaCreacion fue agregada por el decorador
    console.log("Fecha de creación: " + (this as any).fechaCreacion);
  }
}

// Creamos una instancia de Orden
const orden1 = new Orden(1, "Laptop", 1500000);

// Verificamos que la propiedad fechaCreacion existe
orden1.mostrarOrden();
