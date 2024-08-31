// sepúlveda iara, legajo: 120372/5
// tp1 comisión 1
// https://youtu.be/pYm850lFGTs
let numCuadradosInicial = 11; // cantidad inicial de cuadrados                
let numCuadrados = 22;
let tam;
let diagonal;
let opa = 255;

function preload () {
  foto = loadImage('data/obra.jpeg');
}


function setup () {
  createCanvas (800, 400) ;
  image(foto, 0, 0, 400, 400);
  diagonal = dist(0, 0, width, height);
  tam = width / numCuadrados;
}

function draw() {
  background(0);
  image(foto, 0, 0, 400, 400);
  translate(400, 0); // desplaza el for al lado derecho
  for (let x = 0; x < numCuadrados; x++) {
    for (let y = 0; y < numCuadrados; y++) {
      let colorCu, colorCir;
      let distancia = calcularDistancia(mouseX - 400, mouseY, x * tam + tam / 2, y * tam + tam / 2);
      opa = map(distancia, 0, diagonal / 2, 255, 0);

      if ((x + y) % 2 == 0) {
        colorCu = color(0, opa);
        colorCir = color(255);
      } else {
        colorCu = color(255, opa);
        colorCir = color(0);
      }

      //los parámetros y dibujar el cuadrado con círculos
      let parametros = obtenerParametros(x, y);
      dibujarCuadradoConCirculos(x * tam, y * tam, tam, colorCu, colorCir, ...parametros);
    }
  }
}

function keyPressed() {
  if (key == 'a') {
    numCuadrados++; // aumentaa la cantidad de cuadrados
    numCuadrados = constrain(numCuadrados, 1, 400);
    tam = width / (numCuadrados + 10); // ajusta el tamaño de los cuadrados
  }
}
function mousePressed() {
  // restaurar valores iniciales
  numCuadrados = numCuadradosInicial;
  tam = width / (numCuadrados + 11);
}
