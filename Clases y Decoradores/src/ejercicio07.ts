// Ejercicio 7: Interfaz SistemaAutenticacion
// Dos clases diferentes implementan la misma interfaz
// Cada una con su propia forma de autenticación

// Interfaz con métodos de autenticación
interface SistemaAutenticacion {
  iniciarSesion(): void;
  cerrarSesion(): void;
}

// Clase 1: Autenticación por correo y contraseña
class AutenticacionCorreo implements SistemaAutenticacion {
  correo: string;
  contrasena: string;

  constructor(correo: string, contrasena: string) {
    this.correo = correo;
    this.contrasena = contrasena;
  }

  // Implementación: autenticación mediante correo
  iniciarSesion(): void {
    console.log("Iniciando sesión con correo...");
    console.log("Correo: " + this.correo);
    console.log("Sesión iniciada exitosamente por correo.");
  }

  // Implementación: cerrar sesión
  cerrarSesion(): void {
    console.log("Cerrando sesión de correo...");
    console.log("Sesión cerrada.");
  }
}

// Clase 2: Autenticación por redes sociales
class AutenticacionRedesSociales implements SistemaAutenticacion {
  redSocial: string;

  constructor(redSocial: string) {
    this.redSocial = redSocial;
  }

  // Implementación: autenticación mediante red social
  iniciarSesion(): void {
    console.log("Iniciando sesión con " + this.redSocial + "...");
    console.log("Red social: " + this.redSocial);
    console.log("Sesión iniciada exitosamente por red social.");
  }

  // Implementación: cerrar sesión
  cerrarSesion(): void {
    console.log("Cerrando sesión de " + this.redSocial + "...");
    console.log("Sesión cerrada.");
  }
}

// Probamos ambas formas de autenticación
console.log("=== Autenticación por Correo ===");
const authCorreo = new AutenticacionCorreo("carlos@gmail.com", "miClave123");
authCorreo.iniciarSesion();
console.log("");
authCorreo.cerrarSesion();

console.log("");
console.log("=== Autenticación por Redes Sociales ===");
const authRedes = new AutenticacionRedesSociales("Facebook");
authRedes.iniciarSesion();
console.log("");
authRedes.cerrarSesion();
