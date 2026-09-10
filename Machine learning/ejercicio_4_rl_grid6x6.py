"""
Ejercicio 4: Aprendizaje por Refuerzo - Q-Learning en cuadrícula 6x6
Objetivo: Entrenar un agente con Q-Learning para navegar desde A (inicio)
hasta G (meta) esquivando obstáculos (X) en una cuadrícula de 6x6.
"""

import numpy as np
import random

# ============================================================
# 1. DEFINIR EL MAPA DE LA CUADRÍCULA
# ============================================================
#
#  A  _  _  _  _  _
#  _  X  _  X  _  _
#  _  X  _  X  _  _
#  _  _  _  _  _  _
#  _  X  X  X  _  _
#  _  _  _  _  _  G
#
# A = Inicio, G = Meta, X = Obstáculo, _ = Camino libre

# Definimos el mapa como una matriz de caracteres
mapa = [
    ["A", "_", "_", "_", "_", "_"],
    ["_", "X", "_", "X", "_", "_"],
    ["_", "X", "_", "X", "_", "_"],
    ["_", "_", "_", "_", "_", "_"],
    ["_", "X", "X", "X", "_", "_"],
    ["_", "_", "_", "_", "_", "G"],
]

filas = 6
columnas = 6

# Posición de inicio (A) y meta (G)
inicio = (0, 0)
meta = (5, 5)

# Obstáculos (X) - lista de posiciones
obstaculos = [(1, 1), (1, 3), (2, 1), (2, 3), (4, 1), (4, 2), (4, 3)]

# Acciones posibles: 0=arriba, 1=abajo, 2=izquierda, 3=derecha
acciones = ["arriba", "abajo", "izquierda", "derecha"]
num_acciones = len(acciones)

# ============================================================
# 2. PARÁMETROS DEL Q-LEARNING
# ============================================================

alpha = 0.1       # Tasa de aprendizaje
gamma = 0.99      # Factor de descuento
epsilon = 0.1     # Exploración (epsilon-greedy)
epocas = 1000     # Número de episodios de entrenamiento

# ============================================================
# 3. INICIALIZAR LA Q-TABLE
# ============================================================

# La Q-Table es una matriz de (filas x columnas x acciones)
# Inicializamos todos los valores en 0
q_table = np.zeros((filas, columnas, num_acciones))

# ============================================================
# 4. FUNCIONES AUXILIARES
# ============================================================

def es_estado_valido(fila, col):
    """Verifica si una posición es válida (dentro del mapa y sin obstáculo)."""
    if fila < 0 or fila >= filas or col < 0 or col >= columnas:
        return False
    if (fila, col) in obstaculos:
        return False
    return True

def obtener_siguiente_estado(fila, col, accion):
    """Calcula el siguiente estado según la acción elegida."""
    if accion == 0:  # arriba
        nueva_fila, nueva_col = fila - 1, col
    elif accion == 1:  # abajo
        nueva_fila, nueva_col = fila + 1, col
    elif accion == 2:  # izquierda
        nueva_fila, nueva_col = fila, col - 1
    elif accion == 3:  # derecha
        nueva_fila, nueva_col = fila, col + 1
    
    # Si el estado es válido, retornamos la nueva posición
    if es_estado_valido(nueva_fila, nueva_col):
        return nueva_fila, nueva_col
    else:
        # Si no es válido, nos quedamos en la misma posición
        return fila, col

def obtener_recompensa(fila, col):
    """Retorna la recompensa por llegar a una posición."""
    if (fila, col) == meta:
        return 100  # Recompensa por llegar a la meta
    else:
        return -1   # Penalización por cada paso

# ============================================================
# 5. ENTRENAMIENTO CON Q-LEARNING
# ============================================================

print("=== Entrenando al agente con Q-Learning ===")
print(f"Epocas de entrenamiento: {epocas}")
print()

for epoca in range(epocas):
    estado = inicio
    pasos = 0
    terminado = False
    
    while not terminado and pasos < 100:
        fila, col = estado
        
        # Epsilon-greedy: exploración vs explotación
        if random.random() < epsilon:
            accion = random.randint(0, num_acciones - 1)  # Explorar
        else:
            accion = np.argmax(q_table[fila, col])  # Explotar
        
        # Obtener el siguiente estado y la recompensa
        nueva_fila, nueva_col = obtener_siguiente_estado(fila, col, accion)
        recompensa = obtener_recompensa(nueva_fila, nueva_col)
        
        # Actualizar la Q-Table con la fórmula de Q-Learning
        # Q(s,a) = Q(s,a) + alpha * [recompensa + gamma * max(Q(s',a')) - Q(s,a)]
        valor_actual = q_table[fila, col, accion]
        valor_max_futuro = np.max(q_table[nueva_fila, nueva_col])
        q_table[fila, col, accion] = valor_actual + alpha * (recompensa + gamma * valor_max_futuro - valor_actual)
        
        estado = (nueva_fila, nueva_col)
        pasos += 1
        
        # Si llegamos a la meta, terminamos el episodio
        if estado == meta:
            terminado = True
    
    if (epoca + 1) % 200 == 0:
        print(f"Epoca {epoca + 1}/{epocas} completada")

print()
print("=== Entrenamiento completado ===")
print()

# ============================================================
# 6. MOSTRAR LA Q-TABLE APRENDIDA
# ============================================================

print("=== Q-Table aprendida (valores máximos por posición) ===")
print("(Los valores altos indican buenas posiciones para llegar a la meta)")
print()

q_max = np.max(q_table, axis=2)
for i in range(filas):
    fila_str = ""
    for j in range(columnas):
        if (i, j) in obstaculos:
            fila_str += "  [   X  ]"
        elif (i, j) == meta:
            fila_str += "  [ META ]"
        elif (i, j) == inicio:
            fila_str += f"  [{q_max[i][j]:6.1f}]"
        else:
            fila_str += f"  [{q_max[i][j]:6.1f}]"
    print(fila_str)

print()

# ============================================================
# 7. MOSTRAR EL CAMINO ÓPTIMO
# ============================================================

print("=== Camino óptimo aprendido por el agente ===")
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

# Mostrar el mapa con el camino marcado
print("Mapa con el camino optimo (* = camino del agente):")
print()
for i in range(filas):
    fila_str = ""
    for j in range(columnas):
        if (i, j) in camino and (i, j) != inicio and (i, j) != meta:
            fila_str += "  *"
        elif (i, j) in obstaculos:
            fila_str += "  X"
        elif (i, j) == inicio:
            fila_str += "  A"
        elif (i, j) == meta:
            fila_str += "  G"
        else:
            fila_str += "  _"
    print(fila_str)

print()
print(f"Cantidad de pasos del camino óptimo: {len(camino) - 1}")
print(f"Coordenadas del camino: {camino}")
