class Juego {
  constructor(assets) {
    this.estado = "inicio";
    this.nivel = 1;
    this.puntos = 0;
    this.fallos = 0;
    this.sigNivel = 5;

    this.assets = assets;
    this.canasta = new Canasta(this.assets); // pase losassets a Canasta
    this.conejos = [];
    this.sonidoGanasteReproducido = false; // control para que el sonido ganaste.mp3 no se repita

    this.botonInicio = new Boton("INICIAR", width / 2, height * 0.75, 100, 40);
    this.botonCreditos = new Boton("CREDITOS", width / 2, height * 0.85, 100, 40);
    this.botonReiniciar = new Boton("REINICIAR", width / 2, height * 0.75, 120, 40);

    this.generarConejos();
  }

  generarConejos() {
    this.conejos = [];
    let cantidadConejos = 5 + this.nivel * 3;
    for (let i = 0; i < cantidadConejos; i++) {
      this.conejos.push(new Conejo(this.assets));
    }
  }

  actualizar() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "jugando") {
      image(this.assets.bosqueImg, 0, 0, width, height);
      this.canasta.actualizar();

      // colisiones con los conejos
      for (let conejo of this.conejos) {
        conejo.actualizar();

        if (conejo.evaluaColision(this.canasta.x, this.canasta.y, this.canasta.ancho)) {
          if (conejo.tipo === 0) {
            this.puntos++;
            sonidos.colisionConejo.play(); //  sonido cuando atrapa un conejo
          } else {
            this.fallos++;
            sonidos.colisionPerro.play(); // y cuando atrapa un perro (fallo)
          }
          conejo.reiniciarUbicacion();
        }
      }

      this.mostrarHUD();

      if (this.puntos >= this.sigNivel) {
        this.avanzarNivel();
        sonidos.nivelSuperado.play(); // sonido al pasar de nivel
      }

      if (this.fallos >= 5) {
        this.estado = "perdido";
      }
    } else if (this.estado === "perdido") {
      this.pantallaPerdiste();
    } else if (this.estado === "ganaste") {
      this.pantallaGanaste();

      //  sonido de victoria una vez
      if (!this.sonidoGanasteReproducido) {
        sonidos.ganaste.play();
        this.sonidoGanasteReproducido = true;
      }
    } else if (this.estado === "creditos") {
      this.pantallaCreditos();
    }
  }

  pantallaInicio() {
    image(this.assets.fondoImg, 0, 0, width, height);
    // instrucciones
    fill(240, 180);
    rect(width / 2 - 5, height * 0.5 - 15, 360, 75);
    fill(0);
    textSize(20);
    textAlign(CENTER, TOP);
    text(
      "INSTRUCCIONES:\nUsa las flechas para mover la canasta\nAtrapa los conejos y evita los perros",
      width / 2,
      height * 0.5 - 45
      );
    this.botonInicio.actualizar();
    this.botonCreditos.actualizar();
  }

  pantallaCreditos() {
    background(0, 0, 100);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Creditos", width / 2, height / 2 - 100);

    textSize(20);
    text("Nombre: iara Sepúlveda", width / 2, height / 2);
    text("N° de Legajo: 120372/5", width / 2, height / 2 + 30);

    this.botonReiniciar.actualizar();
  }

  mousePressed() {
    if (this.estado === "inicio" && this.botonInicio.colisionMouse()) {
      this.reiniciarJuego();
      this.estado = "jugando";
    } else if (this.estado === "inicio" && this.botonCreditos.colisionMouse()) {
      this.estado = "creditos";
    } else if ((this.estado === "perdido" || this.estado === "ganaste") && this.botonReiniciar.colisionMouse()) {
      this.reiniciarJuego();
    } else if (this.estado === "creditos" && this.botonReiniciar.colisionMouse()) {
      this.reiniciarJuego();
      this.estado = "inicio";
    }
  }

  pantallaPerdiste() {
    background(100, 0, 0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡Perdiste!", width / 2, height / 2 - 50);

    textSize(20);
    this.botonReiniciar.actualizar();
  }

  pantallaGanaste() {
    background(0, 200, 0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡Ganaste todos los niveles!", width / 2, height / 2 - 50);

    textSize(20);
    this.botonReiniciar.actualizar();
  }

  avanzarNivel() {
    this.nivel++;
    this.sigNivel += 5;
    this.puntos = 0;
    this.fallos = 0;
    this.generarConejos();

    if (this.nivel > 3) {
      this.estado = "ganaste";
    }
  }

  reiniciarJuego() {
    this.estado = "inicio";
    this.nivel = 1;
    this.puntos = 0;
    this.fallos = 0;
    this.sigNivel = 5;
    this.generarConejos();
    this.sonidoGanasteReproducido = false; // el control del sonido
    loop();
  }

  mostrarHUD() {
    fill(0);
    textSize(20);
    text(`Nivel: ${this.nivel}`, 40, 30);
    text(`Puntos: ${this.puntos}`, 50, 60);
    text(`Fallos: ${this.fallos}`, 45, 90);
  }
}
