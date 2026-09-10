type Empleado = {

    id: number;
    nombre: string;
    salario: number;
    departamento: string;

};

let empleados: Empleado[] = [

    { id: 1, nombre: "Juan", salario: 1800000, departamento: "Ventas" },
    { id: 2, nombre: "María", salario: 2500000, departamento: "Sistemas" },
    { id: 3, nombre: "Carlos", salario: 2100000, departamento: "Contabilidad" },
    { id: 4, nombre: "Ana", salario: 3000000, departamento: "Gerencia" }

];

function mostrarEmpleados(lista: Empleado[]): void {

    let totalSalarios: number = 0;

    for (let empleado of lista) {

        let { id, nombre, salario, departamento } = empleado;

        console.log(`Id: ${id}
Nombre: ${nombre}
Salario: ${salario}
Departamento: ${departamento}`);

        totalSalarios += salario;

    }

    console.log(`Salario total: ${totalSalarios}`);

}

mostrarEmpleados(empleados);