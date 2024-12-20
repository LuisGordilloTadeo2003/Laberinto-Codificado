# Laberinto-Codificado

Descripción General
El "Laberinto Evolutivo" es un juego en el que el jugador controla un personaje que debe escapar de un laberinto dinámico. La particularidad es que tanto el diseño del laberinto como los enemigos evolucionan mediante programación genética, aprendiendo generación tras generación para hacer el desafío más difícil. La evolución se basa en el comportamiento del jugador, como rutas frecuentadas, puntos de vulnerabilidad y estrategias de escape.

Mecánicas del Juego
Control del Jugador

El jugador controla a un personaje mediante teclado o mando. Puede moverse en las direcciones cardinales (arriba, abajo, izquierda, derecha) y realizar acciones como:
Correr (aumenta la velocidad temporalmente pero reduce la energía).
Interactuar (activar interruptores, abrir puertas secretas, etc.).
Usar objetos (bombas, señuelos, herramientas para bloquear enemigos).
Labertinto Dinámico

Cada nivel presenta un laberinto generado proceduralmente, con pasillos, puertas, trampas y objetos coleccionables.
El laberinto evoluciona para:
Hacer más largas las rutas óptimas de escape.
Incluir trampas en áreas frecuentadas por el jugador.
Crear caminos falsos o circuitos cerrados.
Enemigos Inteligentes

Los enemigos patrullan o persiguen al jugador. Cada generación aprende patrones del jugador, como:
Bloquear rutas comunes.
Coordinarse para rodear al jugador.
Priorizar áreas clave del mapa.
Tipos de enemigos:
Cazadores: Siguen al jugador directamente.
Guardianes: Protegen áreas específicas.
Saboteadores: Alteran el laberinto (cierran puertas, activan trampas).
Evolución con Programación Genética
Evolución del Laberinto

Fitness Function: Evalúa el diseño del laberinto basado en:
Tiempo promedio que el jugador tarda en escapar.
Cantidad de trampas activadas.
Rutas elegidas por el jugador.
Mutación: Cambios aleatorios en la distribución de trampas, puertas y rutas.
Cruce: Combina elementos de laberintos exitosos para crear nuevos diseños.
Evolución de los Enemigos

Fitness Function: Basada en:
Tiempo que tardan en atrapar al jugador.
Zonas efectivamente bloqueadas.
Coordinación para evitar que el jugador pase.
Mutación: Cambios en patrones de movimiento, velocidad o habilidades.
Cruce: Mezcla estrategias de los enemigos más efectivos.
Objetos y Herramientas del Jugador
Mapa Parcial: Muestra una pequeña porción del laberinto.
Señuelos: Engañan a los enemigos para seguir una ruta falsa.
Bombas Temporales: Destruyen paredes o aturden enemigos cercanos.
Llaves: Abren puertas bloqueadas.
Interruptores: Modifican el diseño del laberinto en tiempo real.
Modos de Juego
Modo Historia

El jugador atraviesa una serie de laberintos cada vez más complejos.
Incluye narrativa sobre la evolución del laberinto como un experimento de una IA maligna.
Modo Infinito

Generación ilimitada de laberintos. El objetivo es llegar lo más lejos posible mientras los enemigos y el diseño del laberinto se vuelven más difíciles.
Modo Competitivo

Varios jugadores compiten para escapar de un laberinto mientras enfrentan enemigos evolucionados que los atacan por igual.
Estilo Visual y Sonoro
Gráficos: Estilo pixel art o low-poly, con una atmósfera oscura y colores vivos para destacar elementos interactivos.
Sonido: Música ambiental tensa con efectos sonoros que indican la proximidad de enemigos o trampas.
Posibles Expansiones
Habilidades Especiales del Jugador

Sistema de mejoras, como mayor resistencia o detección de enemigos en el mapa.
Enemigos con Roles Específicos

Incorporar más tipos de enemigos con habilidades únicas, como invisibilidad temporal o creación de trampas.
Editor de Laberintos

Permitir a los jugadores diseñar laberintos para que otros los desafíen.