users=[];
let usercount=0;

/**
 * Este es el contructor que permitira la creacion del objeto usuario
*/
function Registro(id,tipo_documento,numero_documento,correo,contrasena){
    this.id=id;
    this.tipo_documento=tipo_documento;
    this.numero_documento=numero_documento;
    this.correo=correo;
    this.contrasena=contrasena;

}

/* Esta funcion crea el arreglo de objetos de los registros que se van agregando
*/
function agregarRegistro(tipo_doc,num_doc,correo,contrasena){
    
    
    // var tipo_doc=document.getElementById("tipo_documento").value;
    // var num_doc=document.getElementById("numero_documento").value;
    // var correo=document.getElementById("correo").value;
    // var contrasena=document.getElementById("contrasena").value;
    
    var usuario=new Registro(usercount,tipo_doc,num_doc,correo,contrasena);

    // var usuario=new Registro(usercount,tipo_doc,num_doc,correo,"pass1234");

    usercount+=1;
    users.push(usuario);
}

/**
 * Esta funcion filtra el arreglo de onjetos de registro por el tipo de documento en este caso el pasaporte
 * @param {Array} users arreglo de objetos del registro
 * @returns el arreglo filtrado
 */ 
function obtenerRegPasaporte(arreglo){
   return arreglo.filter(user => {
        return user.tipo_documento==="pasaporte"    
    });  
}


/**
 * Esta funcion ordena el arreglo de objetos de registro por numero de pasaporte en forma ascendente
 * @param {Array} users arreglo de objetos del registro
 * @returns el arreglo ordenado
 */
function ordenarArreglo(arreglo){
    return arreglo.sort(function (o1,o2) {
        if (o1.numero_documento > o2.numero_documento) { //comparación lexicogŕafica
            return 1;
        } else if (o1.numero_documento < o2.numero_documento) {
            return -1;
        } 
        return 0;
    }); 
}

function ordenarArreglo2(arreglo){
    ordenamiento = {pasaporte: 1, cedula: 2, taridentidad: 3, regcivil: 4, cedulaextra: 5};
    
    var ordenado= arreglo.sort(function (o1,o2) {
        if (o1.numero_documento > o2.numero_documento) { //comparación lexicogŕafica
           return 1;
       } else if (o1.numero_documento < o2.numero_documento) {
           return -1;
       } 
       return 0;
   }); 
   
   return ordenado.sort((
       (a, b) => ordenamiento[a.tipo_documento] - ordenamiento[b.tipo_documento])
       );
   }

/*Modulo exports*/
                
// module.exports={obtenerRegPasaporte,ordenarArreglo}
                
function filtrar(){
    console.log(obtenerRegPasaporte(users))
    console.table(ordenarArreglo(users));
    // console.table(ordenarArreglo(obtenerRegPasaporte(users)));

}

/** Valores de prueba */
agregarRegistro("pasaporte", "AS123459", "prueba1@email.com","pass1234")
agregarRegistro("cedula", "1137600365", "prueba2@gmail.com","pass1234")
agregarRegistro("pasaporte", "AD123451", "prueba3@email.com","pass1234")
agregarRegistro("taridentidad", "1128449711", "prueba4@gmail.com","pass1234")
agregarRegistro("pasaporte", "AO123431", "prueba5@email.com","pass1234")
agregarRegistro("cedula", "1034567854", "prueba6@mail.com","pass1234")
agregarRegistro("pasaporte", "AS023232", "prueba7@hotmail.com","pass1234")

console.table(obtenerRegPasaporte(users))
console.table(ordenarArreglo(obtenerRegPasaporte(users)));
console.table(ordenarArreglo2(users));

