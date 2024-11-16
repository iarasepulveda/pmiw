class Fallos {
  constructor() {
    this.contador = 0;
  }

  incrementarFallos() {
    this.contador++;
  }

  obtenerFallos() {
    return this.contador;
  }

  reiniciar() {
    this.contador = 0;
  }
}
