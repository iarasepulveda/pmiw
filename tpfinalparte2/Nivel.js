class Nivel {
  constructor() {
    this.nivelActual = 1;
  }

  incrementarNivel() {
    this.nivelActual++;
  }

  obtenerNivel() {
    return this.nivelActual;
  }
}
