// Ejercicio 5: Operación bancaria de retiro
// La promesa resuelve si hay saldo suficiente, rechaza si no

function retirarDinero(saldo: number, cantidad: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (cantidad <= saldo) {
      // Si hay saldo suficiente, se resuelve
      const saldoFinal = saldo - cantidad;
      resolve(`Retiro exitoso. Saldo restante: $${saldoFinal}`);
    } else {
      // Si no hay saldo suficiente, se rechaza
      reject(`Saldo insuficiente. Tienes $${saldo} e intentas retirar $${cantidad}`);
    }
  });
}

// Probamos con saldo suficiente
retirarDinero(500, 200)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// Probamos con saldo insuficiente
retirarDinero(300, 500)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
