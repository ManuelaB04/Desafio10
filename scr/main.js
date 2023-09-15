//PRIMER NOMBRE
// - OPTATIVO --> OK
// - DE 3 A 10 CARACTERES EN TOTAL --> OK
// - LA PRIMERA LETRA EN MAYUSCULA O MINÚSCULA --> OK
let form = document.querySelector("form")
let nombre = document.getElementById("nombre")
nombre.addEventListener("focusout",  (e)=>{
    e.preventDefault();
    let valor = nombre.value;
    let longitud = valor.length;
    console.log(longitud)
    if ((longitud <3  || longitud >10)&&longitud !=0 ){
        nombre.setCustomValidity("La longitud del nombre debe ser de 3 a 10 caracteres")
        nombre.reportValidity()
    }else
    // - LAS SIGUIENTES LETRAS SOLO EN MINÚSCULA --> OK
    var character="";
    for (var i=1;i<longitud;i++){ 
        character = valor.charAt(i); 
        console.log(character)
        if (character == character.toUpperCase()){
            alert("A partir de la segunda letra debe ser en minúscula");
            nombre.focus;
            nombre.length = 0;
            nombre.value =""
            break;
        }
    }
    // - SOPORTA CARACTERES DEL ESPAÑOL --> OK  
    if(nombre.value.match(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/)){
        nombre.setCustomValidity ('Solo caracteres del español');
        nombre.reportValidity()
    }
});

//PRIMER APELLIDO
// - OBLIGATORIO --> OK
// - DE 2 A 20 CARACTERES EN TOTAL --> OK
// - TODAS LAS LETRAS EN MAYÚSCULA Y/O MINÚSCULA EN CUALQUIER PARTE DEL TEXTO --> OK
let apellido = document.getElementById("apellido")
apellido.addEventListener("focusout",  (e)=>{
    e.preventDefault();
    let valor2 = apellido.value;
    let longitud2 = valor2.length;
    console.log(longitud2)
    if (longitud2 <2  || longitud2 >20){
        apellido.setCustomValidity("La longitud del nombre debe ser de 2 a 20 caracteres")
        apellido.reportValidity()
        apellido.focus;
        apellido.length = 0;
        apellido.value ="";
    } 
    // - SOPORTA CARACTERES DEL ESPAÑOL y APÓSTROFES O COMILLAS SIMPLES (') --> OK
    if ((valor2).match(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ']/)){
        apellido.setCustomValidity ('Solo caracteres del español y apóstrofes o comillas simples');
        apellido.reportValidity()
    }
    // - NO SOPORTA NINGÚN OTRO CARACTER MÁS QUE LOS MENCIONADOS
});

//NÚMERO DE DOCUMENTO
//DEBE HABILITARSE SOLO SI SELECCIONÓ EL TIPO --> OK
// evento para el input radio del "si"
let tipdoc="";
document.getElementById('DNI').addEventListener('click', function(e) {
    numerodoc.disabled = false;
    tipdoc=1;
    return(tipdoc);
});

document.getElementById('CUIL').addEventListener('click', function(e) {
    numerodoc.disabled = false;
    tipdoc=2;
    return(tipdoc)  
});

numerodoc.addEventListener("focusout", (e)=>{
    e.preventDefault();
    //DNI
    if (tipdoc === 1){
        let valor3 = numerodoc.value;
        let longitud3 = valor3.length;
        console.log(valor3)
        console.log(longitud3)
        if ((longitud3 <7  || longitud3 >10)){
            numerodoc.setCustomValidity("requiere 8 digitos")
            numerodoc.reportValidity()
        }
        else if ((valor3).match(/[^0-9.]/)){
            numerodoc.setCustomValidity ('Sólo números y . permitido');
            numerodoc.reportValidity()
        }
    }

    //CUIL
    if (tipdoc === 2){
        let valor3 = numerodoc.value;
        let longitud3 = valor3.length;
        console.log(valor3)
        console.log(longitud3)
        if ((longitud3 >13)){
            numerodoc.setCustomValidity("requiere maximo 11 digitos")
            numerodoc.reportValidity()
        }
        else if ((valor3).match(/[^0-9][!/^\d{1,2}\/\d{3}\/\d{3}$/]/)){
            numerodoc.setCustomValidity ('Solo se permitirá utilizar el guión luego de los primeros 2 dígitos y antes del último');
            numerodoc.reportValidity()
        }
    }
});  
  
//DIRECCIÓN
// - OPTATIVO --> OK
// - DE 10 A 200 CARACTERES --> OK
let direccion = document.getElementById("direccion")
direccion.addEventListener("focusout",  (e)=>{
    e.preventDefault();
    let valor5 = direccion.value;
    let longitud5 = valor5.length;
    console.log(longitud5)
    if ((longitud5 <10  || longitud5 >200)){
        direccion.setCustomValidity("La longitud de la dirección debe ser de 10 a 200 caracteres")
        direccion.reportValidity()
        direccion.focus;
        direccion.length = 0;
        direccion.value ="";
    }
    // - SOPORTA CARACTERES EN MAYÚSCULAS Y MINÚSCULAS DEL ESPAÑOL y PORTUGÉS --> OK
    // - SOPORTA ESPACIOS, NÚMEROS, COMAS, GUIONES MEDIOS, PUNTOS, PARÉNTESIS, COMILLAS SIMPLES Y DOBLES Y SÍMBOLO DE GRADO "°" Y BARRA "/" --> OK
    if ((valor5).match(/[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/)){
        direccion.setCustomValidity ("Soporta caracteres del español y portugués, números y simbolos")
        direccion.reportValidity()
    }
});


