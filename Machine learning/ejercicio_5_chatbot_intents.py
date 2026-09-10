"""
Ejercicio 5: Chatbot con Clasificacion de Texto
Objetivo: Crear un chatbot que clasifique intenciones del usuario
usando TF-IDF y Naive Bayes.

Intenciones del dataset:
saludo, despedida, pregunta, soporte, agradecimiento, informacion
"""

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import os

# ============================================================
# 1. CARGAR EL DATASET
# ============================================================

ruta_dataset = os.path.join(os.path.dirname(__file__), "datasets", "chatbot_intents_dataset.csv")

df = pd.read_csv(ruta_dataset)

print("=== Dataset de intenciones ===")
print(df.to_string(index=False))
print()

print(f"Total de registros: {len(df)}")
print(f"Intenciones disponibles: {list(df['intent'].unique())}")
print()

# ============================================================
# 2. PREPARAR LOS DATOS
# ============================================================

# Usamos todos los datos para entrenar (el dataset es pequeno)
textos = df["text"].values
etiquetas = df["intent"].values

# ============================================================
# 3. VECTORIZAR EL TEXTO CON TF-IDF
# ============================================================

# TfidfVectorizer convierte texto en numeros
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(textos)

print(f"Dimensiones del vocabulario: {len(vectorizer.vocabulary_)} palabras")
print()

# ============================================================
# 4. ENTRENAR EL MODELO
# ============================================================

# MultinomialNB es un clasificador Naive Bayes para texto
modelo = MultinomialNB()
modelo.fit(X_tfidf, etiquetas)

print("Modelo entrenado correctamente.")
print()

# ============================================================
# 5. FUNCION PARA PREDECIR INTENCION
# ============================================================

def predecir_intencion(texto):
    """Predice la intencion de un texto dado."""
    texto_tfidf = vectorizer.transform([texto])
    intencion = modelo.predict(texto_tfidf)[0]
    probabilidades = modelo.predict_proba(texto_tfidf)[0]
    confianza = max(probabilidades)
    return intencion, confianza

# ============================================================
# 6. RESPUESTAS DEL CHATBOT
# ============================================================

def obtener_respuesta(intencion):
    """Retorna una respuesta segun la intencion detectada."""
    respuestas = {
        "saludo": "Hola! Bienvenido. En que puedo ayudarte?",
        "despedida": "Hasta luego! Que tengas un buen dia.",
        "pregunta": "Buena pregunta. Estoy aprendiendo, pero hago mi mejor esfuerzo!",
        "soporte": "Para soporte tecnico, puedes contactar al correo soporte@sena.edu.co",
        "agradecimiento": "De nada! Me alegra poder ayudarte.",
        "informacion": "Puedo ayudarte con informacion sobre cursos, horarios y servicios del SENA.",
    }
    return respuestas.get(intencion, "No estoy seguro de entender. Puedes reformular tu pregunta?")

# ============================================================
# 7. CONSOLA INTERACTIVA DEL CHATBOT
# ============================================================

print("=" * 50)
print("  CHATBOT DE CLASIFICACION DE TEXTO")
print("  Escribe 'salir' para terminar la conversacion")
print("=" * 50)
print()

while True:
    mensaje = input("Tu: ").strip()

    if mensaje.lower() == "salir":
        print("Chatbot: Hasta luego! Fue un gusto ayudarte.")
        break

    if not mensaje:
        print("Chatbot: Por favor escribe algo.")
        continue

    intencion, confianza = predecir_intencion(mensaje)
    respuesta = obtener_respuesta(intencion)

    print(f"Chatbot: {respuesta}")
    print(f"  [Intencion detectada: {intencion} | Confianza: {confianza:.2%}]")
    print()
