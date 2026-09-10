# Ejercicios Prácticos - Promesas y Generators en TypeScript

Proyecto con 18 ejercicios prácticos para la clase de SENA sobre Promesas y Generators en TypeScript.

## Instalación

1. Abrir la carpeta del proyecto en la terminal:

```bash
cd D:\TypeScript\Promesas
```

2. Instalar las dependencias:

```bash
npm install
```

## Ejecución de los ejercicios

Para ejecutar un ejercicio individual:

```bash
npx ts-node src/ejercicio01.ts
```

O usar los scripts definidos en package.json:

```bash
npm run ejercicio1
npm run ejercicio2
...
npm run ejercicio18
```

## Ejercicios

### Promesas Básicas

| Ejercicio | Concepto | Descripción |
|-----------|----------|-------------|
| Ejercicio 1 | Promise + setTimeout | Crear una función que retorne una promesa que se resuelva después de 2 segundos |
| Ejercicio 2 | then y catch | Validar la edad de una persona, resolver o rechazar la promesa según la edad |
| Ejercicio 3 | Promise + setTimeout | Simular la carga de datos desde un servidor |
| Ejercicio 4 | Encadenamiento de then | Obtener números, calcular cuadrados con encadenamiento |
| Ejercicio 5 | then y catch | Operación bancaria de retiro con validación de saldo |
| Ejercicio 6 | Promise.all | Ejecutar tres promesas simultáneas (usuarios, productos, pedidos) |

### Generators

| Ejercicio | Concepto | Descripción |
|-----------|----------|-------------|
| Ejercicio 7 | function* + yield + for...of | Generator que genere los números del 1 al 5 |
| Ejercicio 8 | yield | Generator que produzca números pares entre 0 y 20 |
| Ejercicio 9 | next() | Generator infinito con next() manual para primeros 10 valores |
| Ejercicio 10 | next() | Generator que reciba un arreglo de nombres |
| Ejercicio 11 | yield | Generator de la serie de Fibonacci |
| Ejercicio 12 | next(valor) | Generator que reciba valores externos con next(valor) |

### Promesas + Generators Combinados

| Ejercicio | Concepto | Descripción |
|-----------|----------|-------------|
| Ejercicio 13 | Promise + setTimeout | Obtener usuarios con plantillas de string |
| Ejercicio 14 | Promise.all | Carga simultánea con tiempos diferentes |
| Ejercicio 15 | Promise | Autenticación de usuario con credenciales |
| Ejercicio 16 | Generator + yield | Filtrar números pares de un arreglo |
| Ejercicio 17 | Promise + Generator | Combinar Promise y Generator para cuadrados |
| Ejercicio 18 | Generator + Promise | Procesamiento de tareas en orden secuencial |

## Tecnologías utilizadas

- TypeScript
- Promesas (Promise, then, catch)
- Promise.all
- Generators (function*, yield)
- next() y next(valor)
- setTimeout

## Autor

Estudiante de Análisis y Desarrollo de Software - SENA
