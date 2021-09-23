//Array with all inputs fields
const inputs = document.querySelectorAll("#form-registro input");

//object with regular expressions to validate inputs
const regex = { 
	correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	clave: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
	cedula: /^[\d]{8,10}$/, // 8 a 10 digitos
	taridentidad: /^[\d]{10}$/, // 10 digitos
	regcivil: /^[\d]{10}$/, // 10 digitos.
	cedulaextra:  /^[\d]{6}$/,//6 digitos
	pasaporte: /^[\w]{2}[\d]{6}$/, // 8 caracteres
};

//function to compare value with regex(correo) and return boolean value
function checkCorreo(valor) {
	// if (valor == "") return false;
	return regex.correo.test(valor);
}

//function to compare value with regex(clave) and return boolean value
function checkContrasena(valor) {
	// if (valor == "") return false;
	return regex.clave.test(valor);
}

//
function checkNumDocumento(valor, tipo){
	switch(tipo){
		case "cedula":
			return regex.cedula;
		case "taridentidad":
			return regex.taridentidad;
		case "regcivil":
			return regex.regcivil;
		case "cedulaextra":
			return regex.cedulaextra;
		case "pasaporte":
			return regex.pasaporte;
		default:
			return regex.documento.test(valor);
	}

}

//function for check out all the fields
const validateForm = (e) => {
	switch (e.target.name) {
		case "correo":
			validarCampo(regex.correo, e.target, 'correo');
			console.log(checkCorreo(e.target.value));
			break;
		case "contrasena":
			validarCampo(regex.clave, e.target, 'contrasena');
			console.log(checkContrasena(e.target.value));
			break;
		case "numero_documento":
			const tipodocumento=document.getElementById("tipo_documento")
			const validocument = checkNumDocumento(e.target.value, tipodocumento.value)
			console.log(validocument)
			validarCampo(validocument, e.target,'numero_documento')
	}
};



//add events for keyup and blur of the fields
inputs.forEach((input) => {
	input.addEventListener("keyup", validateForm);
	// input.addEventListener("blur", validateForm);
});

//function to see visible the validate status
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		// campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		// campos[campo] = false;
	}
}

// EXPORTS MODULES
module.exports = {checkCorreo, checkContrasena,checkNumDocumento};


<<<<<<< HEAD
// module.exports = {checkCorreo, checkContrasena,checkNumDocumento};

=======
>>>>>>> bf26b54 (Se corrige funcionalidad de validacion de documentos y tambien se corrige el module.export)
