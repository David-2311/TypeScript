// Ejercicio 6: Interfaz DispositivoElectronico
// Las interfaces obligan a implementar ciertos métodos
// implements se usa para aplicar una interfaz a una clase

// Interfaz que obliga a implementar encender, apagar y reiniciar
interface DispositivoElectronico {
  encender(): void;
  apagar(): void;
  reiniciar(): void;
}

// Clase Computador que implementa la interfaz
class Computador implements DispositivoElectronico {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  // Implementamos los métodos de la interfaz
  encender(): void {
    console.log("Computador " + this.marca + " encendido.");
  }

  apagar(): void {
    console.log("Computador " + this.marca + " apagado.");
  }

  reiniciar(): void {
    console.log("Computador " + this.marca + " reiniciando...");
  }
}

// Clase TelefonoMovil que implementa la interfaz
class TelefonoMovil implements DispositivoElectronico {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  encender(): void {
    console.log("Teléfono " + this.marca + " encendido.");
  }

  apagar(): void {
    console.log("Teléfono " + this.marca + " apagado.");
  }

  reiniciar(): void {
    console.log("Teléfono " + this.marca + " reiniciando...");
  }
}

// Creamos instancias y ejecutamos los métodos
console.log("=== Computador ===");
const pc = new Computador("HP");
pc.encender();
pc.reiniciar();
pc.apagar();

console.log("");
console.log("=== Teléfono Móvil ===");
const celular = new TelefonoMovil("Samsung");
celular.encender();
celular.reiniciar();
celular.apagar();
