class Boton {
  constructor(txt, x, y, ancho, alto) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.colorReposo = color(100, 220, 0);
    this.colorOver = color(255, 100, 100);
  }

  actualizar() {
    fill(this.colisionMouse() ? this.colorOver : this.colorReposo);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.txt, this.x, this.y);
  }

  colisionMouse() {
    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
      );
  }
}
