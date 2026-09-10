"""
Ejercicio 3: Clustering No Supervisado - Segmentación de Clientes
Objetivo: Aplicar KMeans para agrupar clientes por sus características
(Edad, Ingresos, Gasto Anual) y crear perfiles de cada grupo.
"""

import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import os

# ============================================================
# 1. CARGAR EL DATASET
# ============================================================

ruta_dataset = os.path.join(os.path.dirname(__file__), "datasets", "customer_clustering_dataset.csv")

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

# Seleccionamos las características para el clustering
X = df[["age", "monthly_income", "monthly_spending"]]

# Normalizamos los datos para que todas las variables tengan la misma escala
# Esto es importante porque KMeans usa distancias
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("=== Datos normalizados (primeras 5 filas) ===")
print(X_scaled[:5])
print()

# ============================================================
# 3. APLICAR KMEANS
# ============================================================

# Definimos el número de clusters (grupos)
num_clusters = 4

# Creamos el modelo KMeans
kmeans = KMeans(n_clusters=num_clusters, random_state=42, n_init=10)

# Entrenamos y asignamos las etiquetas de cada cliente
df["cluster"] = kmeans.fit_predict(X_scaled)

print(f"=== Clustering completado: {num_clusters} grupos ===")
print()

# ============================================================
# 4. ANALIZAR LOS RESULTADOS
# ============================================================

# Calculamos el perfil promedio de cada grupo
print("=== Perfil promedio de cada grupo ===")
print()

for cluster_id in range(num_clusters):
    # Filtramos los clientes de este grupo
    clientes_grupo = df[df["cluster"] == cluster_id]
    
    print(f"--- Grupo {cluster_id} ---")
    print(f"  Cantidad de clientes: {len(clientes_grupo)}")
    print(f"  Edad promedio: {clientes_grupo['age'].mean():.1f} años")
    print(f"  Ingreso mensual promedio: ${clientes_grupo['monthly_income'].mean():,.2f}")
    print(f"  Gasto mensual promedio: ${clientes_grupo['monthly_spending'].mean():,.2f}")
    print()

# ============================================================
# 5. RESUMEN FINAL
# ============================================================

print("=== Resumen de la distribución de clientes ===")
print(df["cluster"].value_counts().sort_index())
print()

# Mostramos los centroides (punto central de cada grupo)
print("=== Centroides de los clusters ===")
centroides = scaler.inverse_transform(kmeans.cluster_centers_)
centroides_df = pd.DataFrame(centroides, columns=["age", "monthly_income", "monthly_spending"])
centroides_df.index.name = "Cluster"
print(centroides_df.round(2))
