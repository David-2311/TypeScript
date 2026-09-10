"""
Ejercicio 7: Aprendizaje por Refuerzo - Q-Learning en Laberinto Especial
Objetivo: Entrenar un agente con Q-Learning para salir de un laberinto
desde S (inicio) hasta G (meta), esquivando obstáculos (X).

Laberinto:
  S 0 0 X 0 0
  0 X 0 X 0 0
  0 X 0 0 0 X
  0 0 0 X 0 0
  X 0 X 0 0 0
  0 0 0 0 X G

Recompensas: Meta (+100), Obstáculo (-100), Paso (-1)
"""

import numpy as np
import random

# ============================================================
# 1. DEFINIR EL LABERINTO
# ============================================================
#
#  S 0 0 X 0 0
#  0 X 0 X 0 0
#  0 X 0 0 0 X
#  0 0 0 X 0 0
#  X 0 X 0 0 0
#  0 0 0 0 X G
#
# S = Inicio, G = Meta, X = Obstáculo, 0 = Camino libre

# Definimos el laberinto como matriz de caracteres
laberinto = [
    ["S", "0", "0", "X", "0", "0"],
    ["0", "X", "0", "X", "0", "0"],
    ["0", "X", "0", "0", "0", "X"],
    ["0", "0", "0", "X", "0", "0"],
    ["X", "0", "X", "0", "0", "0"],
    ["0", "0", "0", "0", "X", "G"],
]

filas = 6
columnas = 6

# Posiciones clave
inicio = (0, 0)
meta = (5, 5)

# Obstáculos
obstaculos = [(0, 3), (1, 1), (1, 3), (2, 1), (2, 5), (3, 3), (4, 0), (4, 2), (5, 4)]

# Acciones: 0=arriba, 1=abajo, 2=izquierda, 3=derecha
acciones = ["arriba", "abajo", "izquierda", "derecha"]
num_acciones = len(acciones)

# ============================================================
# 2. PARÁMETROS DEL Q-LEARNING
# ============================================================

alpha = 0.1       # Tasa de aprendizaje
gamma = 0.99      # Factor de descuento
epsilon = 0.1     # Exploración
epocas = 2000     # Más episodios para un laberinto más complejo

# ============================================================
# 3. INICIALIZAR LA Q-TABLE
# ============================================================

q_table = np.zeros((filas, columnas, num_acciones))

# ============================================================
# 4. FUNCIONES AUXILIARES
# ============================================================

def es_estado_valido(fila, col):
    """Verifica si una posición es válida."""
    if fila < 0 or fila >= filas or col < 0 or col >= columnas:
        return False
    if (fila, col) in obstaculos:
        return False
    return True

def obtener_siguiente_estado(fila, col, accion):
    """Calcula el siguiente estado según la acción."""
    if accion == 0:  # arriba
        nueva_fila, nueva_col = fila - 1, col
    elif accion == 1:  # abajo
        nueva_fila, nueva_col = fila + 1, col
    elif accion == 2:  # izquierda
        nueva_fila, nueva_col = fila, col - 1
    elif accion == 3:  # derecha
        nueva_fila, nueva_col = fila, col + 1
    
    if es_estado_valido(nueva_fila, nueva_col):
        return nueva_fila, nueva_col
    else:
        return fila, col

def obtener_recompensa(fila, col):
    """Retorna la recompensa según la posición."""
    if (fila, col) == meta:
        return 100   # Recompensa por llegar a la meta
    elif (fila, col) in obstaculos:
        return -100  # Penalización por obstáculo
    else:
        return -1    # Penalización por cada paso

# ============================================================
# 5. ENTRENAMIENTO CON Q-LEARNING
# ============================================================

print("=== Entrenando al agente con Q-Learning ===")
print(f"Epocas de entrenamiento: {epocas}")
print(f"Recompensas: Meta=+100, Obstáculo=-100, Paso=-1")
print()

for epoca in range(epocas):
    estado = inicio
    pasos = 0
    terminado = False
    
    while not terminado and pasos < 100:
        fila, col = estado
        
        # Epsilon-greedy
        if random.random() < epsilon:
            accion = random.randint(0, num_acciones - 1)
        else:
            accion = np.argmax(q_table[fila, col])
        
        # Obtener siguiente estado y recompensa
        nueva_fila, nueva_col = obtener_siguiente_estado(fila, col, accion)
        recompensa = obtener_recompensa(nueva_fila, nueva_col)
        
        # Actualizar Q-Table
        valor_actual = q_table[fila, col, accion]
        valor_max_futuro = np.max(q_table[nueva_fila, nueva_col])
        q_table[fila, col, accion] = valor_actual + alpha * (recompensa + gamma * valor_max_futuro - valor_actual)
        
        estado = (nueva_fila, nueva_col)
        pasos += 1
        
        if estado == meta:
            terminado = True
    
    if (epoca + 1) % 500 == 0:
        print(f"Epoca {epoca + 1}/{epocas} completada")

print()
print("=== Entrenamiento completado ===")
print()

# ============================================================
# 6. MOSTRAR LA Q-TABLE FINAL
# ============================================================

print("=== Q-Table final (valores máximos por posición) ===")
print()

q_max = np.max(q_table, axis=2)
for i in range(filas):
    fila_str = ""
    for j in range(columnas):
        if (i, j) in obstaculos:
            fila_str += "  [  X  ]"
        elif (i, j) == meta:
            fila_str += "  [ META]"
        elif (i, j) == inicio:
            fila_str += f" [{q_max[i][j]:6.1f}]"
        else:
            fila_str += f" [{q_max[i][j]:6.1f}]"
    print(fila_str)

print()

# ============================================================
# 7. MOSTRAR EL CAMINO SOLUCIÓN
# ============================================================

print("=== Camino solución encontrado por el agente ===")
print()

estado = inicio
camino = [estado]
pasos = 0

while estado != meta and pasos < 50:
    fila, col = estado
    accion = np.argmax(q_table[fila, col])
    nueva_fila, nueva_col = obtener_siguiente_estado(fila, col, accion)
    estado = (nueva_fila, nueva_col)
    camino.append(estado)
    pasos += 1

# Mostrar el laberinto con el camino
print("Laberinto con el camino solucion (* = camino):")
print()
for i in range(filas):
    fila_str = ""
    for j in range(columnas):
        if (i, j) == inicio:
            fila_str += "  S"
        elif (i, j) == meta:
            fila_str += "  G"
        elif (i, j) in obstaculos:
            fila_str += "  X"
        elif (i, j) in camino:
            fila_str += "  *"
        else:
            fila_str += "  0"
    print(fila_str)

print()
print(f"Pasos del camino: {len(camino) - 1}")
print(f"Coordenadas: {camino}")
