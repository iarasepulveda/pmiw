class Canasta {
  constructor(assets) {
    this.x = width / 2;
    this.y = height - 50;
    this.vel = 7;
    this.ancho = 80;
    this.alto = 35;

    this.canastaImg = assets.canastaImg;
  }

  actualizar() {
    this.mover();
    this.dibujar();
  }

  dibujar() {
    // dibuja imagen de canasta
    image(this.canastaImg, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }

  mover() {
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        this.x -= this.vel;
      } else if (keyCode === RIGHT_ARROW) {
        this.x += this.vel;
      }
      this.x = constrain(this.x, this.ancho / 2, width - this.ancho / 2);
    }
  }
}
