function alimentadordatos() {
  this.isin = ["aaaaa", "bbbbbb", "cccccc"];

  this.subtiposof = [
    {
      "id": "RE",
      "descripcion": "Rendimiento"
    },
    {
      "id": "DI",
      "descripcion": "Distribución"
    }
  ];
  this.tiposof = [
    {
      "id": "AP",
      "descripcion": "Abono de Picos",
      "idsubtipo": "RE"
    },
    {
      "id": "AS",
      "descripcion": "Ampliación sin derechos",
      "idsubtipo": "DI"
    }
  ];
}



module.exports = alimentadordatos;