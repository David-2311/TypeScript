// Ejercicio 8: Interfaz Estudiante
// Define las propiedades que debe tener un estudiante
// Una clase implementa la interfaz y muestra la información

// Interfaz que define las propiedades del estudiante
interface EstudianteInterfaz {
  nombre: string;
  edad: number;
  programaAcademico: string;
}

// Clase que implementa la interfaz Estudiante
class Estudiante implements EstudianteInterfaz {
  nombre: string;
  edad: number;
  programaAcademico: string;

  constructor(nombre: string, edad: number, programaAcademico: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.programaAcademico = programaAcademico;
  }

  // Método para mostrar toda la información del estudiante
  mostrarInformacion(): void {
    console.log("Nombre del estudiante: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Programa académico: " + this.programaAcademico);
  }
}

// Creamos una instancia y mostramos la información
const estudiante1 = new Estudiante("Ana García", 20, "Análisis y Desarrollo de Software");
estudiante1.mostrarInformacion();
