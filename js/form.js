//Array with all inputs fields
const inputs = document.querySelectorAll("#form-registro input")

//object with regular expressions to validate inputs
const regex = {
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
}

//function to compare value with regex and return boolean value
function checkCorreo(valor) {
    return regex.correo.test(valor)
}

//function for check out all the fields
const validateForm = (e) => {
    switch (e.target.name) {
        case "correo":
            const r = checkCorreo(e.target.value) //TODO remove const r only for testing out work
            console.log(r)
            break
            //TODO add others cases 
    }
}


//add events for keyup and blur of the fields
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
})

module.exports = checkCorreo; //Export for the challenge