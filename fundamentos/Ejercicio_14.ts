type Producto = {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
};

let inventario: Producto[] = [

    { id: 1, nombre: "Mouse", precio: 50000, cantidad: 10 },
    { id: 2, nombre: "Teclado", precio: 80000, cantidad: 6 },
    { id: 3, nombre: "Monitor", precio: 700000, cantidad: 3 },
    { id: 4, nombre: "Diadema", precio: 120000, cantidad: 8 }

];

function mostrarProductos(productos: Producto[]): void {

    for (let producto of productos) {

        console.log(`Id: ${producto.id}
Nombre: ${producto.nombre}
Precio: ${producto.precio}
Cantidad: ${producto.cantidad}`);

    }

}

mostrarProductos(inventario);