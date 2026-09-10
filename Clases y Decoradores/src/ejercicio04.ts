// Ejercicio 4: Herencia - Vehiculo, Automovil y Motocicleta
// extends hereda propiedades y métodos de la clase base
// super llama al constructor de la clase padre

// Clase base: Vehiculo
class Vehiculo {
  marca: string;
  modelo: string;
  velocidadMaxima: number;

  constructor(marca: string, modelo: string, velocidadMaxima: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
  }

  // Método que muestra la información del vehículo
  mostrarInformacion(): void {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Velocidad máxima: " + this.velocidadMaxima + " km/h");
  }
}

// Clase derivada: Automovil (hereda de Vehiculo)
class Automovil extends Vehiculo {
  numPuertas: number;

  constructor(marca: string, modelo: string, velocidadMaxima: number, numPuertas: number) {
    // super llama al constructor de Vehiculo
    super(marca, modelo, velocidadMaxima);
    this.numPuertas = numPuertas;
  }

  // Método propio de Automovil
  mostrarInformacion(): void {
    super.mostrarInformacion(); // Llama al método del padre
    console.log("Tipo: Automóvil");
    console.log("Número de puertas: " + this.numPuertas);
  }
}

// Clase derivada: Motocicleta (hereda de Vehiculo)
class Motocicleta extends Vehiculo {
  tipoManillar: string;

  constructor(marca: string, modelo: string, velocidadMaxima: number, tipoManillar: string) {
    super(marca, modelo, velocidadMaxima);
    this.tipoManillar = tipoManillar;
  }

  // Método propio de Motocicleta
  mostrarInformacion(): void {
    super.mostrarInformacion(); // Llama al método del padre
    console.log("Tipo: Motocicleta");
    console.log("Tipo de manillar: " + this.tipoManillar);
  }
}

// Creamos instancias y mostramos información
console.log("=== Automóvil ===");
const miAuto = new Automovil("Toyota", "Corolla", 180, 4);
miAuto.mostrarInformacion();

console.log("");
console.log("=== Motocicleta ===");
const miMoto = new Motocicleta("Yamaha", "MT-07", 200, "Deportivo");
miMoto.mostrarInformacion();
