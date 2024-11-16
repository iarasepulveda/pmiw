class Puntos {
  constructor() {
    this.contador = 0;
  }

  incrementarPuntos() {
    this.contador++;
  }

  obtenerPuntos() {
    return this.contador;
  }

  reiniciar() {
    this.contador = 0;
  }
}
