// Ejercicio 5: Herencia - Empleado, EmpleadoTiempoCompleto y EmpleadoPorHoras
// Cada clase calcula el salario de manera diferente

// Clase base: Empleado
class Empleado {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método base (las clases hijas lo sobreescribirán)
  calcularSalario(): number {
    return 0;
  }

  mostrarInformacion(): void {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
  }
}

// Clase derivada: EmpleadoTiempoCompleto
// Salario fijo mensual
class EmpleadoTiempoCompleto extends Empleado {
  salarioMensual: number;

  constructor(nombre: string, edad: number, salarioMensual: number) {
    super(nombre, edad);
    this.salarioMensual = salarioMensual;
  }

  // Sobreescribimos el método para calcular salario fijo
  calcularSalario(): number {
    return this.salarioMensual;
  }

  mostrarInformacion(): void {
    super.mostrarInformacion();
    console.log("Tipo: Tiempo completo");
    console.log("Salario mensual: $" + this.calcularSalario());
  }
}

// Clase derivada: EmpleadoPorHoras
// Salario según horas trabajadas
class EmpleadoPorHoras extends Empleado {
  tarifaPorHora: number;
  horasTrabajadas: number;

  constructor(nombre: string, edad: number, tarifaPorHora: number, horasTrabajadas: number) {
    super(nombre, edad);
    this.tarifaPorHora = tarifaPorHora;
    this.horasTrabajadas = horasTrabajadas;
  }

  // Sobreescribimos el método para calcular salario por horas
  calcularSalario(): number {
    return this.tarifaPorHora * this.horasTrabajadas;
  }

  mostrarInformacion(): void {
    super.mostrarInformacion();
    console.log("Tipo: Por horas");
    console.log("Tarifa por hora: $" + this.tarifaPorHora);
    console.log("Horas trabajadas: " + this.horasTrabajadas);
    console.log("Salario mensual: $" + this.calcularSalario());
  }
}

// Creamos instancias y mostramos resultados
console.log("=== Empleado Tiempo Completo ===");
const emp1 = new EmpleadoTiempoCompleto("Carlos", 30, 2500000);
emp1.mostrarInformacion();

console.log("");
console.log("=== Empleado Por Horas ===");
const emp2 = new EmpleadoPorHoras("Laura", 25, 50000, 80);
emp2.mostrarInformacion();
