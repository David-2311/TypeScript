"""
Ejercicio 1: Regresión Lineal - Predicción de Precio de Vivienda
Objetivo: Entrenar un modelo de Regresión Lineal que prediga el precio
de una casa basándose en metros cuadrados, habitaciones y antigüedad.
"""

import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import os

# ============================================================
# 1. CARGAR EL DATASET
# ============================================================

# Ruta relativa al archivo CSV
ruta_dataset = os.path.join(os.path.dirname(__file__), "datasets", "housing_regression_dataset.csv")

# Cargamos el dataset con pandas
df = pd.read_csv(ruta_dataset)

# Mostramos las primeras filas para entender los datos
print("=== Primeras filas del dataset ===")
print(df.head())
print()

# Información general del dataset
print("=== Información del dataset ===")
print(f"Total de registros: {len(df)}")
print(f"Columnas: {list(df.columns)}")
print()

# ============================================================
# 2. PREPARAR LOS DATOS
# ============================================================

# Variables independientes (características)
# X contiene: metros cuadrados, habitaciones, antigüedad
X = df[["size_m2", "rooms", "age_years"]]

# Variable dependiente (lo que queremos predecir)
# y contiene: precio en millones
y = df["price_millions"]

# Dividimos los datos: 80% para entrenar, 20% para probar
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"Datos de entrenamiento: {len(X_train)} registros")
print(f"Datos de prueba: {len(X_test)} registros")
print()

# ============================================================
# 3. ENTRENAR EL MODELO
# ============================================================

# Creamos el modelo de Regresión Lineal
modelo = LinearRegression()

# Entrenamos el modelo con los datos de entrenamiento
modelo.fit(X_train, y_train)

# Mostramos los coeficientes aprendidos
print("=== Coeficientes del modelo ===")
print(f"Intercepto (b): {modelo.intercept_:.4f}")
print(f"Coeficiente size_m2: {modelo.coef_[0]:.4f}")
print(f"Coeficiente rooms: {modelo.coef_[1]:.4f}")
print(f"Coeficiente age_years: {modelo.coef_[2]:.4f}")
print()

# ============================================================
# 4. EVALUAR EL MODELO
# ============================================================

# Hacemos predicciones con los datos de prueba
y_pred = modelo.predict(X_test)

# Calculamos métricas de evaluación
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("=== Evaluación del modelo ===")
print(f"Error cuadrático medio (MSE): {mse:.4f}")
print(f"Coeficiente de determinación (R²): {r2:.4f}")
print()

# ============================================================
# 5. REALIZAR LA PREDICCIÓN SOLICITADA
# ============================================================

print("=== Predicción solicitada ===")
print("Características de la vivienda:")
print("  - Metros cuadrados: 150 m²")
print("  - Habitaciones: 4")
print("  - Antigüedad: 10 años")
print()

# Creamos los datos de entrada para la predicción
nueva_vivienda = np.array([[150, 4, 10]])

# Realizamos la predicción
precio_predicho = modelo.predict(nueva_vivienda)

print(f"Precio predicho: ${precio_predicho[0]:.2f} millones")
