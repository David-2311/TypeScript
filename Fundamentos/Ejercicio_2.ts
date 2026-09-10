function compra(producto: string, precio: number, cantidad: number): void {

    let total: number = precio * cantidad;

    console.log(`Producto: ${producto}
Precio: ${precio}
Cantidad: ${cantidad}
Total a pagar: ${total}`);
}

compra("Teclado", 80000, 2);