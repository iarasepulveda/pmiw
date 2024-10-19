//https://youtu.be/dikxZ5gL0SQ 
let imagenes = [];     
let sonido;
let sonidoMusica;
let sonidoClick;
let sonidoEmpieza = false;
let estado = 0;
let escrito = [
  "Carta a Una señorita en Paris.",
  "Autor del cuento; Julio Cortázar en el año 1951 \n Marina Vergara:120383/9 y Iara Sepúlveda: 120372/5.",
  "El narrador escribe una carta a Andrée, desde su departamento en Buenos Aires.",
  "Confiesa que tiene un problema insólito.",
  "Describe la primera vez que vomitó un conejo de forma inesperada y decide entonces:",
  "Sara, asustada y convencida de que el hombre está loco, llama a la policía.",
  "Decide ocultar el hecho, pero le preocupa cómo manejar la situación.",
  "Sigue vomitando aún más conejitos y el caos crece en el departamento.",
  "El narrador se siente atrapado e incapaz de controlar la situación.",
  "Agotado y sin salida, el narrador es abrumado por el caos de los conejitos. Desesperado toma una decisión trágica.",
  "Juego",
  "La dosis de pastillas no fue la correcta para terminar con su vida.",
  "Luego de la masacre, el departamento está en un silencioso caos.",
  "La culpa lo carcome tanto que se siente perseguido por las almas de los conejos.",
  "Tanta es la angustia del narrador que decide abandonar el departamento.",
  "Decide pedirle ayuda a un amigo cercano.",
  "Su amigo, como último recurso, lo lleva con un psiquiatra.",
];

function preload() {
  //funcion para la musica
  sonidoMusica = loadSound("data/musica.mp3");
  sonidoClick = loadSound("data/click.mp3");
  for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(16); // Tamaño de texto ajustado
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].resize(640, 480);
  }
}

function draw() {
  background(200);
  fill(250);

  if (estado >= 0 && estado < imagenes.length) {
    let img = imagenes[estado];
    let x = width / 2; //centro del canvas en x
    let y = height / 2; //centro del canvas en y

    cargarImagenes(img, x, y, img.width, img.height, CENTER);

    //rectangulo atras del texxto
    fill(240, 180);
    rect(120, 240, 400, 60, 05);

    fill (0);
    text(escrito[estado], 120, 245, 400);

    // Se dibujan los botones
    if (estado === 0 || estado === 1) {
      dibujaBoton("Comenzar", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Créditos", width / 2 + 100, height * 0.75, 165, 50);
    } else if (estado === 2) {
      dibujaBoton("Siguiente", width - 100, height - 50, 100, 50);
    } else if (estado === 3) {
      dibujaBoton("Vomita Conejos", width / 2 + 100, height * 0.75, 165, 50);
      dibujaBoton("Mató a Alguien", width / 2 - 100, height * 0.75, 165, 50);
    } else if (estado === 4) {
      dibujaBoton("Trata de Ocultarlo", width / 2 - 100, height * 0.75, 165, 50);
      dibujaBoton("Se lo cuenta a Sara", width / 2 + 100, height * 0.75, 165, 50);
    } else if (estado === 5) {
      dibujaBoton("Lo meten preso", width / 2, height * 0.75, 120, 50);
    } else if (estado === 6) {
      dibujaBoton("Acepta la situación y se los queda", width / 2 + 150, height * 0.85, 275, 50);
      dibujaBoton("Se deshace de los conejos", width / 2 - 150, height * 0.85, 260, 50);
    } else if (estado === 7) {
      dibujaBoton("Continúa soportando la invasión", width / 2, height * 0.75, 270, 50);
    } else if (estado === 8) {
      dibujaBoton("Pide ayuda", width / 2 - 200, height * 0.75, 100, 50);
      dibujaBoton("Se suicida", width / 2 -50, height * 0.75, 100, 50);
      dibujaBoton("Mata a todos los conejos", width / 2 + 150, height * 0.75, 200, 50);
    } else if (estado === 9) {
      dibujaBoton("Toma pastillas", width / 2 + 150, height * 0.75, 110, 50);
      dibujaBoton("Se tira del balcón", width / 2 - 150, height * 0.75, 130, 50);
    } else if (estado === 10 || estado === 11 || estado === 14) {
      dibujaBoton("Inicio", width /2, height * 0.75, 100, 50);
    } else if (estado === 12) {
      dibujaBoton("Se siente Aliviado", width / 2 + 150, height * 0.85, 220, 50);
      dibujaBoton("Se siente Culpable", width / 2 - 150, height * 0.85, 220, 50);
    } else if (estado===13) {
      dibujaBoton("Continúa con la angustia", width / 2 - 150, height * 0.75, 260, 50);
      dibujaBoton("Pide ayuda", width / 2 + 150, height * 0.75, 100, 50);
    } else if (estado ===15) {
      dibujaBoton("No le cree y lo denuncia", width / 2 + 150, height * 0.75, 230, 50);
      dibujaBoton("Lo ayuda", width / 2 - 150, height * 0.75, 100, 50);
    } else if (estado ===16) {
      dibujaBoton("Lo internan", width / 2 + 150, height * 0.75, 110, 50);
      dibujaBoton("Se escapa", width / 2 -150, height * 0.75, 110, 50);
    }
  }
}

function cargarImagenes(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea); //Alinea la imagen
  if (imag) {
    image(imag, x, y, ancho, alto); //Dibuja las imagenes en el canvas
  }
}

function mousePressed() {
  // reproduce musica
  if (!sonidoEmpieza) {
    sonidoMusica.loop(); // reproduce el sonido en bucle
    sonidoEmpieza = true; // se cambia el estado a true
  }

  // reproduce click
  sonidoClick.play();


  //Aavnzar a los estados al hacer clic en los botones
  if (estado === 0) {  
    if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { // boton "creditos"
      estado = 1;
    } else if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { // boton "comenzar"
      estado = 2;
    }
  } else if (estado === 1) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) {
      estado = 0;
    }
  } else if (estado === 2) {
    if (botonSobreMouse(width - 100, height - 50, 100, 50)) { //boton "siguiente"
      estado = 3;
    }
  } else if (estado === 3) {
    if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { //boton vomita conejos
      estado = 4;
    } else if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { // boton "mató a alguien"
      estado = 0;
    }
  } else if (estado === 4) {
    if (botonSobreMouse(width / 2 - 100, height * 0.75, 165, 50)) { //boton " trata de ocultarlo"
      estado = 6;
    } else if (botonSobreMouse(width / 2 + 100, height * 0.75, 165, 50)) { // boton " se lo cuenta a sara
      estado = 5;
    }
  } else if (estado === 5) {
    if (botonSobreMouse(width / 2, height * 0.75, 120, 50)) { //boton "lo meten preso"
      estado = 0;
    }
  } else if (estado === 6) {
    if (botonSobreMouse(width / 2 + 150, height * 0.85, 275, 50)) { // boton acepta la situación""
      estado = 7;
    } else if (botonSobreMouse (width / 2 - 150, height * 0.85, 260, 50)) { //boton "se deshace de los conejos"
      estado = 8;
    }
  } else if (estado === 7) {
    if (botonSobreMouse(width / 2, height * 0.75, 270, 50)) { //boton "continua soportando la invasión"
      estado = 8;
    }
  } else if (estado === 8) {
    if (botonSobreMouse(width / 2 - 200, height * 0.75, 100, 50)) { // boton "pide ayuda"
      estado = 15;
    } else if (botonSobreMouse(width / 2 -50, height * 0.75, 100, 50)) { // boton " se suicida"
      estado = 9;
    } else if (botonSobreMouse(width / 2 + 100, height * 0.75, 200, 50)) { // boton " mata a todos los conejos"
      estado = 12;
    }
  } else if (estado === 9) {
    if (botonSobreMouse ( width / 2 + 150, height * 0.75, 110, 50)) { //boton "toma pastillas"
      estado=11;
    } else if (botonSobreMouse(width / 2 - 150, height * 0.75, 130, 50)) { // boton "se tira del balcon"
      estado = 10;
    }
  } else if (estado === 10 || estado === 11 || estado === 14) {
    if (botonSobreMouse(width / 2, height * 0.75, 100, 50)) { //boton "inicio"
      estado = 0;
    }
  } else if (estado === 12) {
    if (botonSobreMouse(width / 2 + 150, height * 0.85, 220, 50)) { // boton " se siente aliviado"
      estado = 0;
    } else if (botonSobreMouse(width / 2 - 150, height * 0.85, 220, 50)) { //"culpable"
      estado =13;
    }        
  } else if (estado ===13) {
    if (botonSobreMouse(width / 2 - 150, height * 0.75, 260, 50)) { //Continua con la angustia
      estado = 14;
    } else if (botonSobreMouse( width / 2 + 150, height * 0.75, 100, 50)) { //pide ayuda
      estado = 15;
    }
  } else if (estado === 15) {
    if (botonSobreMouse (width / 2 + 150, height * 0.75, 230, 50)) { //no le cree y lo denuncia
      estado= 5;
    } else if (botonSobreMouse(width / 2 - 150, height * 0.75, 100, 50)) { //lo ayuda
      estado = 16;
    }
  } else if (estado ===16) {
    if (botonSobreMouse(width / 2 + 150, height * 0.75, 110, 50)) { // lo internan
      estado =10;
    } else if (botonSobreMouse(width / 2 -150, height * 0.75, 110, 50)) {  // se escapa
    estado = 14;
  }
}
}
