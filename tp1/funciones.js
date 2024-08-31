// Función para calcular la distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
  return dist(x1, y1, x2, y2);
}

// Función para obtener los parámetros de los círculos según la posición
function obtenerParametros(x, y) {
  if (x == 5 && y >= 6 && y <= 10) return [true, true, false, false]; // columna 6
  if (y == 5 && x >= 6 && x <= 10) return [true, false, true, false]; // fila 6
  if (y == 0 && x >= 6 && x <= 10) return [true, false, false, true]; // fila 1
  if (y >= 6 && y <= 10 && x >= 0 && x <= 5) return [true, false, false, true]; // Parte inferior izquierda
  if (x >= 6 && y >= 1 && y <= 5) return [true, false, false, true]; // Parte superior derecha
  if (x == 0 && y >= 6 && y <= 10) return [false, false, false, true]; // columna 1
  if (x == 10 && y >= 0 && y <= 5) return [true, false, false, false]; // columna 11
  if (x == 5 && y == 5) return [false, false, false, false]; // cuadrado central
  if (x == 5) return [false, false, true, true]; // columna 6
  if (y == 5) return [false, true, false, true]; // fila 6

  return [false, true, true, false];
} 

// Función para dibujar un cuadrado con círculos
function dibujarCuadradoConCirculos(x, y, tam, colorCu, colorCir, arribaIzq, arribaD, abajoIzq, abajoD) {
  fill(colorCu);
  rect(x, y, tam, tam);

  fill(colorCir);
  let offset = tam * 0.2;
  let diametro = tam * 0.28;

  if (arribaIzq) ellipse(x + offset, y + offset, diametro, diametro);
  if (arribaD) ellipse(x + tam - offset, y + offset, diametro, diametro);
  if (abajoIzq) ellipse(x + offset, y + tam - offset, diametro, diametro);
  if (abajoD) ellipse(x + tam - offset, y + tam - offset, diametro, diametro);
}
