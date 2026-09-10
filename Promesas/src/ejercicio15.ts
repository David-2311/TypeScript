// Ejercicio 15: Autenticación de usuario
// Recibe usuario y contraseña, retorna una Promise

// Credenciales de prueba
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "1234";

function autenticarUsuario(usuario: string, contrasena: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulamos un proceso de autenticación que tarda 2 segundos
    setTimeout(() => {
      if (usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA) {
        // Credenciales correctas - resuelve
        resolve("Autenticación exitosa. Bienvenido " + usuario);
      } else {
        // Credenciales incorrectas - rechaza
        reject("Credenciales incorrectas. Usuario o contraseña inválidos.");
      }
    }, 2000);
  });
}

// Probamos con credenciales correctas
console.log("Probando credenciales correctas...");
autenticarUsuario("admin", "1234")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Probamos con credenciales incorrectas
console.log("Probando credenciales incorrectas...");
autenticarUsuario("usuario", "error")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
