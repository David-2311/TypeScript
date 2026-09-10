// Ejercicio 3: Clase CuentaBancaria
// Saldo privado, métodos para depositar y retirar
// Control de saldo insuficiente

class CuentaBancaria {
  // saldo es privado: no se puede acceder directamente desde fuera
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  // Método para depositar dinero
  depositar(cantidad: number): void {
    this.saldo += cantidad;
    console.log("Depósito de $" + cantidad + " realizado.");
    console.log("Saldo actual: $" + this.saldo);
  }

  // Método para retirar dinero
  retirar(cantidad: number): void {
    if (cantidad <= this.saldo) {
      // Si hay saldo suficiente, se realiza el retiro
      this.saldo -= cantidad;
      console.log("Retiro de $" + cantidad + " realizado.");
      console.log("Saldo actual: $" + this.saldo);
    } else {
      // Si no hay saldo suficiente, se muestra mensaje de error
      console.log("No hay saldo suficiente.");
      console.log("Saldo disponible: $" + this.saldo);
      console.log("Intento de retiro: $" + cantidad);
    }
  }

  // Método público para consultar el saldo
  consultarSaldo(): number {
    return this.saldo;
  }
}

// Creamos una cuenta con saldo de $500000
const cuenta1 = new CuentaBancaria(500000);
console.log("Saldo inicial: $" + cuenta1.consultarSaldo());
console.log("---");

// Retiro exitoso: $200000
cuenta1.retirar(200000);
console.log("---");

// Retiro fallido: $700000 (más del saldo disponible)
cuenta1.retirar(700000);
console.log("---");

// Depósito de $100000
cuenta1.depositar(100000);
