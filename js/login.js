var registros = [
  // {
  //   tipo_doc: "CC",
  //   num_doc: 1233455435,
  //   correo: "mail@mail.com",
  //   contrasena: "pass123",
  // },
  // {
  //   tipo_doc: "CC",
  //   num_doc: 1233455435,
  //   correo: "mail1@mail.com",
  //   contrasena: "pass123",
  // },
  // {
  //   tipo_doc: "CC",
  //   num_doc: 1233455435,
  //   correo: "mail2@mail.com",
  //   contrasena: "pass123",
  // },
];

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
}

function login() {
  console.log("entre");
  let correo = document.getElementById("correo").value;
  let contrasena = document.getElementById("contrasena").value;
  let captcha = document.getElementById("captcha").value;
  registros.forEach((registro) => {
    if (
      registro.correo === correo &&
      registro.contrasena === contrasena &&
      validarCAPTCHA(captcha)
    ) {
      console.log("True ingrese ");
      return true;
    } else {
      console.log("False no ingreso ");
      return false;
    }
  });
}

function validarCAPTCHA(valor) {
  return valor === "15";
}
module.export = { registros, agregarRegistro, login, validarCAPTCHA };
