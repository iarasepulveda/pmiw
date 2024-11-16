class SigNivel {
  constructor() {
    this.meta = 5; // mta inicial para pasar de nivel
  }

  incrementarMeta() {
    this.meta += 5; // se aumenta la meta para el siguiente nivel
  }

  obtenerMeta() {
    return this.meta;
  }
}
