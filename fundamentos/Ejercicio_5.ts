let productos: [number, string, number][] = [
    [1, "Mouse", 50000],
    [2, "Monitor", 750000],
    [3, "Teclado", 80000]
];

for (let producto of productos) {

    console.log(`Id: ${producto[0]}
Nombre: ${producto[1]}
Precio: ${producto[2]}`);
}