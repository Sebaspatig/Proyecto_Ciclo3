//Array with all inputs fields
const inputs = document.querySelectorAll("#form-registro input");

//object with regular expressions to validate inputs
const regex = {
	correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	clave: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
};

//function to compare value with regex(correo) and return boolean value
function checkCorreo(valor) {
	return regex.correo.test(valor);
}

//function to compare value with regex(clave) and return boolean value
function checkContrasena(valor) {
	if (valor == "") return false;
	return regex.clave.test(valor);
}

//function for check out all the fields
const validateForm = (e) => {
	switch (e.target.name) {
		case "correo":
			// let r = checkCorreo(e.target.value); //TODO remove const r only for testing out work
			console.log(checkCorreo(e.target.value));
			break;
		case "contrasena":
			//TODO remove const r only for testing out work
			console.log(checkContrasena(e.target.value));
			break;
	}
};

//add events for keyup and blur of the fields
inputs.forEach((input) => {
	input.addEventListener("keyup", validateForm);
	input.addEventListener("blur", validateForm);
});

// EXPORTS MODULES

// module.exports = checkCorreo;
// module.exports = checkContrasena;
