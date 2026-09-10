// Ejercicio 10: Decorador de clase que registra la creación de instancias
// Cada vez que se crea una instancia con new, se muestra un mensaje en consola

// Definición del decorador de clase
// Recibe el constructor y retorna un nuevo constructor que imprime un mensaje
function registrarInstancia<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Se imprime cuando se crea la instancia
      console.log("Se ha creado una instancia de la clase: " + constructor.name);
    }
  };
}

// Aplicamos el decorador a la clase Servicio
@registrarInstancia
class Servicio {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  ejecutar(): void {
    console.log("Ejecutando servicio: " + this.nombre);
  }
}

// Creamos instancias de Servicio
// Al crear cada una, el decorador muestra el mensaje
console.log("Creando primera instancia...");
const servicio1 = new Servicio("Backup");
servicio1.ejecutar();

console.log("");
console.log("Creando segunda instancia...");
const servicio2 = new Servicio("Reporte");
servicio2.ejecutar();
