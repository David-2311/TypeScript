let configuracionSistema = {

    nombre: "SistemaVentas",
    version: "1.0",
    activo: true,
    usuarios: 50,
    servidor: "Local"

};

for (let propiedad in configuracionSistema) {

    console.log(`${propiedad}: ${configuracionSistema[propiedad as keyof typeof configuracionSistema]}`);

}