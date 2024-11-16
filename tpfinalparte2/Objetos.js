class Conejo {
  constructor(assets) {
    this.tipo = int(random(0, 2)); // 0: conejo, 1: perro
    this.reiniciarUbicacion();
    this.despY = random(2, 4);
    this.lado = 30;

    this.conejoImg = assets.conejoImg;
    this.perroImg = assets.perroImg;
  }

  actualizar() {
    this.y += this.despY;
    if (this.y > height) {
      this.reiniciarUbicacion();
    }
    this.dibujar();
  }

  dibujar() {
    if (this.tipo === 0) {
      image(this.conejoImg, this.x - this.lado / 2, this.y - this.lado / 2, this.lado, this.lado); //imagen de conejo
    } else {
      image(this.perroImg, this.x - this.lado / 2, this.y - this.lado / 2, this.lado, this.lado); //imagend eperro
    }
  }

  reiniciarUbicacion() {
    this.x = random(50, width - 50);
    this.y = -random(100, 400);
  }

  evaluaColision(px, py, pw) {
    return dist(this.x, this.y, px, py) < this.lado / 2 + pw / 2;
  }
}
