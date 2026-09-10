let notas = {
    Juan: 4.5,
    Maria: 3.8,
    Carlos: 4.2,
    Ana: 5.0
};

for (let estudiante in notas) {

    console.log(`${estudiante}: ${notas[estudiante as keyof typeof notas]}`);
}