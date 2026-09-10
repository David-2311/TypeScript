// Ejercicio 2: Clase Usuario con modificadores de acceso
// private: solo se accede dentro de la clase
// public: se accede desde cualquier parte
// readonly: solo se lee, no se modifica

class Usuario {
  // private: solo accesible dentro de la clase
  private id: number;

  // public + readonly: se puede leer pero no modificar directamente
  public readonly nombre: string;

  // private: solo se modifica con el método cambiarContrasena
  private contrasena: string;

  constructor(id: number, nombre: string, contrasena: string) {
    this.id = id;
    this.nombre = nombre;
    this.contrasena = contrasena;
  }

  // Método para cambiar la contraseña (forma correcta de modificarla)
  cambiarContrasena(nuevaContrasena: string): void {
    this.contrasena = nuevaContrasena;
    console.log("Contraseña cambiada exitosamente.");
  }

  // Método para mostrar información (accedemos a propiedades privadas dentro de la clase)
  mostrarInformacion(): void {
    console.log("ID:", this.id);
    console.log("Nombre:", this.nombre);
    console.log("Contraseña:", this.contrasena);
  }
}

// Creamos una instancia de Usuario
const usuario1 = new Usuario(1, "Carlos", "miClave123");

// nombre es público y readonly: se puede leer
console.log("Nombre del usuario:", usuario1.nombre);

// Mostramos toda la información
usuario1.mostrarInformacion();

// Cambiamos la contraseña usando el método
usuario1.cambiarContrasena("nuevaClave456");

// Volvemos a mostrar la información
usuario1.mostrarInformacion();

// NOTA: No se puede acceder a usuario1.id porque es private
// No se puede modificar usuario1.nombre porque es readonly
