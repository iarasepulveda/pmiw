// https://youtu.be/3cTMc_E9yFY
// disculpa profe se me alargo el video, no pude hacerlo mas corto
let juego;
let assets = {}; // almacena las img
let sonidos = {};

function preload() {
  // img asignadas al objeto assets
  assets = {
  fondoImg:
  loadImage("data/imagen0.jpeg"),
  bosqueImg:
  loadImage("data/bosque.jpg"),
  conejoImg:
  loadImage("data/conejo.png"),
  perroImg:
  loadImage("data/perro.png"),
  canastaImg:
  loadImage("data/canasta.png")
};
sonidos = {
  colisionConejo:
loadSound("data/colisionconejo.mp3"),
  colisionPerro:
loadSound("data/colisionperro.mp3"),
  nivelSuperado:
loadSound("data/level-passed.mp3"),
  ganaste:
loadSound("data/ganaste.mp3")
  };
}
function setup() {
  createCanvas(640, 480);
  juego = new Juego(assets); //  pase las img a la clase Juego
}

function draw() {
  background(255);
  juego.actualizar(); // actualizar la lógica
}

function mousePressed() {
  if (juego) {  // se verificca que el objeto juego esté creado antes de llamar a mousePressed()
    juego.mousePressed();
  }
}
