"""
Ejercicio 6: Chatbot de Soporte Tecnico
Objetivo: Crear un chatbot enfocado en soporte tecnico que clasifique
intenciones usando TF-IDF y Naive Bayes.

Intenciones soportadas: saludo, instalacion, error, actualizacion, despedida
"""

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import os

# ============================================================
# 1. CREAR EL DATASET DE SOPORTE TECNICO
# ============================================================

ruta_dataset = os.path.join(os.path.dirname(__file__), "datasets", "tech_support_dataset.csv")

if not os.path.exists(ruta_dataset):
    print("=== Creando dataset de soporte tecnico ===")

    datos = {
        "text": [
            # Saludo
            "hola",
            "buenos dias",
            "buenas tardes",
            "que tal",
            "saludos",
            "hey",
            "buenas noches",
            "que onda",
            "hi",
            "hello",

            # Instalacion
            "como instalo el programa",
            "necesito ayuda con la instalacion",
            "no se como instalar",
            "paso a paso de instalacion",
            "guia de instalacion",
            "como configuro el software",
            "instalacion del sistema",
            "como begin con la instalacion",
            "quiero instalar la aplicacion",
            "problema con la instalacion",

            # Error
            "tengo un error",
            "el programa no funciona",
            "aparece un mensaje de error",
            "se cuelga el sistema",
            "no abre la aplicacion",
            "error inesperado",
            "fallo en el sistema",
            "el software esta fallando",
            "no responde",
            "pantalla azul de muerte",

            # Actualizacion
            "como actualizo el programa",
            "necesito actualizar",
            "hay nuevas versiones",
            "donde descargo la actualizacion",
            "comoConfigurer updates",
            "version nueva disponible",
            "actualizar el sistema",
            "download latest version",
            "upgrade del software",
            "patch disponible",

            # Despedida
            "adios",
            "hasta luego",
            "nos vemos",
            "chao",
            "bye",
            "me voy",
            "hasta pronto",
            "nos leemos",
            "chau",
            "me despido",
        ],
        "intent": [
            "saludo", "saludo", "saludo", "saludo", "saludo",
            "saludo", "saludo", "saludo", "saludo", "saludo",

            "instalacion", "instalacion", "instalacion", "instalacion", "instalacion",
            "instalacion", "instalacion", "instalacion", "instalacion", "instalacion",

            "error", "error", "error", "error", "error",
            "error", "error", "error", "error", "error",

            "actualizacion", "actualizacion", "actualizacion", "actualizacion", "actualizacion",
            "actualizacion", "actualizacion", "actualizacion", "actualizacion", "actualizacion",

            "despedida", "despedida", "despedida", "despedida", "despedida",
            "despedida", "despedida", "despedida", "despedida", "despedida",
        ]
    }

    df_nuevo = pd.DataFrame(datos)
    df_nuevo.to_csv(ruta_dataset, index=False)
    print(f"Dataset creado: {ruta_dataset}")
    print(f"Total de registros: {len(df_nuevo)}")
    print()

# ============================================================
# 2. CARGAR EL DATASET
# ============================================================

df = pd.read_csv(ruta_dataset)

print("=== Dataset de soporte tecnico ===")
print(df.to_string(index=False))
print()

print(f"Total de registros: {len(df)}")
print(f"Intenciones: {list(df['intent'].unique())}")
print()

# ============================================================
# 3. PREPARAR LOS DATOS
# ============================================================

textos = df["text"].values
etiquetas = df["intent"].values

# ============================================================
# 4. VECTORIZAR CON TF-IDF
# ============================================================

vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(textos)

# ============================================================
# 5. ENTRENAR EL MODELO
# ============================================================

modelo = MultinomialNB()
modelo.fit(X_tfidf, etiquetas)

print("Modelo entrenado correctamente.")
print()

# ============================================================
# 6. FUNCION PARA PREDECIR INTENCION
# ============================================================

def predecir_intencion(texto):
    """Predice la intencion de un texto dado."""
    texto_tfidf = vectorizer.transform([texto])
    intencion = modelo.predict(texto_tfidf)[0]
    probabilidades = modelo.predict_proba(texto_tfidf)[0]
    confianza = max(probabilidades)
    return intencion, confianza

# ============================================================
# 7. RESPUESTAS DEL CHATBOT DE SOPORTE
# ============================================================

def obtener_respuesta(intencion):
    """Retorna una respuesta de soporte tecnico segun la intencion."""
    respuestas = {
        "saludo": "Hola! Soy tu asistente de soporte tecnico. En que puedo ayudarte?",
        "instalacion": "Para instalar el programa, sigue estos pasos:\n  1. Descarga el instalador desde la pagina oficial\n  2. Ejecuta el archivo .exe\n  3. Sigue el asistente de instalacion\n  4. Reinicia el equipo si es necesario\nTienes algun problema especifico con la instalacion?",
        "error": "Lamento que tengas un error. Por favor:\n  1. Reinicia la aplicacion\n  2. Verifica tu conexion a internet\n  3. Actualiza a la ultima version\n  4. Si persiste, contacta al soporte tecnico\nPuedes describir el error que ves?",
        "actualizacion": "Para actualizar el programa:\n  1. Ve a Configuracion > Actualizaciones\n  2. Haz clic en 'Buscar actualizaciones'\n  3. Descarga e instala la nueva version\n  4. Reinicia la aplicacion\nNecesitas ayuda con algun paso especifico?",
        "despedida": "Hasta luego! Si necesitas mas ayuda, no dudes en escribirme. Que tengas un buen dia!",
    }
    return respuestas.get(intencion, "No estoy seguro de entender tu problema. Puedes describirlo con mas detalle?")

# ============================================================
# 8. CONSOLA INTERACTIVA
# ============================================================

print("=" * 50)
print("  CHATBOT DE SOPORTE TECNICO")
print("  Escribe 'salir' para terminar")
print("=" * 50)
print()

while True:
    mensaje = input("Tu: ").strip()

    if mensaje.lower() == "salir":
        print("Chatbot: Hasta luego! Fue un gusto ayudarte con el soporte tecnico.")
        break

    if not mensaje:
        print("Chatbot: Por favor escribe tu consulta de soporte.")
        continue

    intencion, confianza = predecir_intencion(mensaje)
    respuesta = obtener_respuesta(intencion)

    print(f"Chatbot: {respuesta}")
    print(f"  [Intencion: {intencion} | Confianza: {confianza:.2%}]")
    print()
