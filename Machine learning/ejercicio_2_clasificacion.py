"""
Ejercicio 2: Clasificación - Aprobación de Estudiantes
Objetivo: Entrenar un modelo de Clasificación que prediga si un estudiante
aprueba o no basándose en horas de estudio, asistencia y nota anterior.
"""

import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import os

# ============================================================
# 1. CARGAR EL DATASET
# ============================================================

ruta_dataset = os.path.join(os.path.dirname(__file__), "datasets", "student_classification_dataset.csv")

df = pd.read_csv(ruta_dataset)

print("=== Primeras filas del dataset ===")
print(df.head())
print()

print("=== Información del dataset ===")
print(f"Total de registros: {len(df)}")
print(f"Columnas: {list(df.columns)}")
print()

# ============================================================
# 2. PREPARAR LOS DATOS
# ============================================================

# Variables independientes
# X contiene: horas de estudio, asistencia, nota anterior
X = df[["study_hours", "attendance_percent", "previous_grade"]]

# Variable dependiente
# y contiene: 0 = no aprueba, 1 = aprueba
y = df["passed"]

# Dividimos los datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"Datos de entrenamiento: {len(X_train)} registros")
print(f"Datos de prueba: {len(X_test)} registros")
print()

# ============================================================
# 3. ENTRENAR EL MODELO
# ============================================================

# Creamos el modelo de Árbol de Decisión
modelo = DecisionTreeClassifier(random_state=42)

# Entrenamos el modelo
modelo.fit(X_train, y_train)

print("Modelo de Árbol de Decisión entrenado correctamente.")
print()

# ============================================================
# 4. EVALUAR EL MODELO
# ============================================================

# Hacemos predicciones con los datos de prueba
y_pred = modelo.predict(X_test)

# Calculamos la exactitud del modelo
exactitud = accuracy_score(y_test, y_pred)

print("=== Evaluación del modelo ===")
print(f"Exactitud (Accuracy): {exactitud:.4f}")
print()
print("Reporte de clasificación:")
print(classification_report(y_test, y_pred, target_names=["No Aprueba", "Aprueba"]))
print()

# ============================================================
# 5. REALIZAR LA PREDICCIÓN SOLICITADA
# ============================================================

print("=== Predicción solicitada ===")
print("Características del estudiante:")
print("  - Horas de estudio: 4")
print("  - Asistencia: 80%")
print("  - Nota anterior: 3.8")
print()

# Datos de entrada
nuevo_estudiante = np.array([[4, 80, 3.8]])

# Realizamos la predicción
prediccion = modelo.predict(nuevo_estudiante)
probabilidad = modelo.predict_proba(nuevo_estudiante)

# Mostramos el resultado
if prediccion[0] == 1:
    resultado = "APROBADO"
else:
    resultado = "NO APROBADO"

print(f"Predicción: {resultado}")
print(f"Probabilidad de no aprobar: {probabilidad[0][0]:.2%}")
print(f"Probabilidad de aprobar: {probabilidad[0][1]:.2%}")
