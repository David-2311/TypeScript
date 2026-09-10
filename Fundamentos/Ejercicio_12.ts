type Producto= {
    nombre: string;
    precio: number;
    cantidad: number;
};

let productos: Producto[] = [

    {
        nombre: "Mouse",
        precio: 50000,
        cantidad: 5
    },

    {
        nombre: "Teclado",
        precio: 80000,
        cantidad: 3
    },

    {
        nombre: "Monitor",
        precio: 700000,
        cantidad: 2
    }

];

console.table(productos);