function ultimoElemento<T>(arreglo: T[]): T {

    return arreglo[arreglo.length - 1];

}

let numeros = [10, 20, 30];
let palabras = ["Rojo", "Azul", "Verde"];
let personas = [

    { nombre: "Juan" },
    { nombre: "María" },
    { nombre: "Carlos" }

];

console.log(ultimoElemento(numeros));
console.log(ultimoElemento(palabras));
console.log(ultimoElemento(personas));