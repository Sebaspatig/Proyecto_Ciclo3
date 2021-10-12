var registros = [];

function Registro(tipo_documento, numero_documento, correo, contrasena) {
  /**
   * Sumary: Funtion Resgistro constructor para crear objetos de tipos Usuario
   */
  this.tipo_documento = tipo_documento;
  this.num_documento = numero_documento;
  this.correo = correo;
  this.contrasena = contrasena;
}

function agregarRegistro() {
  /**
   *Sumary: Esta funcion agrega usuarios nuevos desde los valores de form y  los inserta en el array registro
   */
  var tipo_doc = document.getElementById("tipo-documento").value;
  var num_doc = document.getElementById("numero-documento").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var usuario = new Registro(tipo_doc, num_doc, correo, contrasena);
  registros.push(usuario);
  console.table(usuario);
  return registros;
}

function filtrarCorreo(arreglo) {
  /**
   * Esta funcion filtra el arreglo de objetos de registro por correo que incluya "email.com"
   * @param {Array} users arreglo de objetos del registro
   * @returns el arreglo filtrado
   */
  const filtrarCorreo = arreglo.filter((value) => {
    return value.correo.includes("email.com");
  });
  console.table(filtrarCorreo);
  return filtrarCorreo;
}

function obtenerRegPasaporte(arreglo) {
  /**
   * Esta funcion filtra el arreglo de objetos de registro por el tipo de documento en este caso el pasaporte
   * @param {Array} users arreglo de objetos del registro
   * @returns el arreglo filtrado
   */
  const registroPasaporte = arreglo.filter((user) => {
    return user.tipo_documento === "P";
  });
  console.table(registroPasaporte);
  return registroPasaporte;
}

function ordenarArreglo(arreglo) {
  /**
   * Esta funcion ordena los valores de los pasaporte y deja los demas en el sito en el cual fue insertado
   * @param {Array} users arreglo de objetos del registro
   * @returns el arreglo ordena
   */
  arreglo.forEach((i, indexI) => {
    arreglo.forEach((j, indexJ, array) => {
      if (i.tipo_documento === "P" && j.tipo_documento === "P") {
        if (i.num_documento < j.num_documento) {
          var tempo = array[indexI];
          array[indexI] = array[indexJ];
          array[indexJ] = tempo;
        }
      }
    });
  });
  console.table(arreglo);
  return arreglo;
}

module.exports = {
  agregarRegistro,
  obtenerRegPasaporte,
  ordenarArreglo,
  filtrarCorreo,
  registros,
};
