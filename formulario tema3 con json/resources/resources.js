  //todo  Funcion para que se guarde la cookie una hora
  function setCookie(cname, cvalue, exhours) {
    const d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000)); //aquí cambio para que sea 1 hora
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


//todo Almacenar la cookie 1 dia 

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // Añadir 24 horas en milisegundos
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


//todo que se almacen 7 dias 

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000); // Añadir 7 días en milisegundos
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}





  //todo Funcion que nos devuelve lo que almacena la cookie mediante el nombre de la cookie. , esto lo tengo en la Relacion 5, actividad 3.html del tema 3 

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //? Ejemplo:  //? Mostar en el parrafo con id mostrarEdad lo que almacena la cookie con nombre edadUsuario

    //document.getElementById("mostrarEdad").textContent = "Edad: " + getCookie("edadUsuario"); //* En el parrafo con el id mostrarEdad voy a mostrar --> Edad: y lo que almacena la cookie (gracias a getCookie podemos ver lo que almacena ) con nombre edadUsuario


    //! -------------------BORRAR COOKIES--------------------------

//todo borrar las cookies , esta funcion la utilizo en el tema 3, Relacion 5 , actividad4.html

function borrarCookies() {
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var igualPos = cookie.indexOf("=");
      var nombre = igualPos > -1 ? cookie.substr(0, igualPos) : cookie;
      document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    console.log("%cCookies borradas", "color: green;");
  }


//todo Borrar una cookie por su nombr, en este caso estoy borrado email
function borrarCookieporNombre(){
  console.log("email",document.cookie);
  document.cookie = "email=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}



//todo Dejar el valor vacio de una cookie , con el nombre email

function VaciaCookieNombre(){
  setCookie("email" , "");
}

//todo Otra forma  esta elimina todas la que le pasemos por el array 
//? esto lo tengo en el tema 3 , relacion 3 cookies en el js que se llama formulario_cookies.js

function eliminar_cookies() {
  let cookies = ["nombre", "apellidos", "dni", "telefono", "email"];
  for (let i = 0; i < cookies.length; i++) {
      document.cookie = cookies[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}


//!-------------------- FIN DE BORRAR COOKIES---------------------------


//?-------------------- MOSTRAR EL VALOR DE LAS COOKIES------------------------------

  //todo Mostrar el nombre y el valor que almacenan las cookies mediante la consola 

  function mostrarCookies(){
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      let [name, value] = cookie.split("=");
      console.log(`Clave: ${name}, Valor: ${value}`);
    }
}


//todo Mostrar en un parrafo el valor que almacena la cookie, mediante el nombre de la cookie 

function mostrarCookies() {
    // Divide la cadena de cookies en cookies individuales
    let cookies = document.cookie.split(";");
  
    // Itera a través de cada cookie
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      let [name, value] = cookie.split("=");
  
      // Verifica el nombre de la cookie y actualiza el contenido del párrafo correspondiente
  
      if (name === "nombreUsuario") {
        //* Si el nombre de la cookie es "nombreUsuario", actualiza el contenido del párrafo "mostrarUsuario"
        document.getElementById("mostrarUsuario").textContent = "Usuario: " + value;
      } else if (name === "emailUsuario") {
        //* Si el nombre de la cookie es "emailUsuario", actualiza el contenido del párrafo "mostrarEmail"
        document.getElementById("mostrarEmail").textContent = "Correo: " + value;
      } else if (name === "direccionUsuario") {
        //* Si el nombre de la cookie es "direccionUsuario", actualiza el contenido del párrafo "mostrarDireccion"
        document.getElementById("mostrarDireccion").textContent = "Dirección: " + value;
      } else if (name === "edadUsuario") {
        //* Si el nombre de la cookie es "edadUsuario", actualiza el contenido del párrafo "mostrarEdad"
        document.getElementById("mostrarEdad").textContent = "Edad: " + value;
      } else if (name === "dniUsuario") {
        //* Si el nombre de la cookie es "dniUsuario", actualiza el contenido del párrafo "mostrarDni"
        document.getElementById("mostrarDni").textContent = "DNI: " + value;
      }
    }
  }


  //todo mostrar tanto por consola, como por los parrafos definidos en el html lo que almacana las cookies (gracias a getcookie("nombre de la cookie")) Esto lo tengo en la  Relacion 5, actividad 3 del tema 3 y en la actividad 4 de la relacion 5 actividad4_jsmejorado.

  function mostrarCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    let [name, value] = cookie.split("=");
    console.log(`Clave: ${name}, Valor: ${value}`);

      //! MODIFICACION!!!!!

      //todo Escribo en el parrafo con x nombre = definicion: lo que almacena la cookie con x nombre. Ejemplo 
      //? Escribo en el parrafo mostrarUsuario el siguiente texto Usuarios: lo que almacena la cookie nombreUsuario
      document.getElementById("mostrarUsuario").textContent = "Usuario:" + getCookie("nombreUsuario");
      document.getElementById("mostrarEmail").textContent = "emailUsuario:" + getCookie("emailUsuario");
      document.getElementById("mostrarDireccion").textContent = "direccionUsuario:" + getCookie("direccionUsuario");
      document.getElementById("mostrarEdad").textContent = "edadUsuario:" + getCookie("edadUsuario");
      document.getElementById("mostrarDni").textContent = "DNI: " + getCookie("dniUsuario");
    }
  }




  //todo Mostrar en un parrafo lo que almacena una cookie pasando el nombre de la cookie
  //? Esto lo tengo en el tema 3, relacion 5 , actividad3/4_mejorado.js

  //? Mostrar en el parrafo con id mostrarUsuario lo que almacena la cookie nombreUsuario.

  document.getElementById("mostrarUsuario").textContent = "Usuario: " + getCookie("nombreUsuario") ; //* En el parrafo con id mostrarUsuario voy a mostrar -->  Usuario + lo que almacena la cookie (gracias a getCookie) con nombre "nombreUsuario". 


  //! tener cuidado, tengo que poner onload en el body y el nombre de la funcion

  //<body onload=cargarBody()></body>



  //todo cokkie para que se guarde un dia
    //? Funcion para que se guarde la cookie un dia
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   }

   //todo Ventana
   
   window.open(url, "ventana1", "width=550,height=800,left=200,top=100,scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");





     //todo Validacion del dni

     function validadDni(){

      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

      let dniConLetra = document.getElementById("dni").value.trim(); //? Recojo lo que escribe el usuario por el input, le quito los espacios

      console.log('%cEl dni que ha introducido el suaurio es: ' + dniConLetra, 'color: green; font-size: 16px;');


      let dniSinLetra = parseInt(dniConLetra.slice(0, -1)); //? Elimino el ultimo caracter que es la letra del dni

      console.log('%cEl dni sin la letra es: ' + dniSinLetra, 'color: green; font-size: 16px;');

      let letraDelDni = dniConLetra.slice(-1) //? Almaceno solamente la letra

      console.log('%cLa letra del dni es: ' + letraDelDni, 'color: green; font-size: 16px;');

      //todo Hacemos la division y nos quedamos con el resto, para saber en que posicion del array letras esta mi letra, con mi dni es la posicion 17 que es la V  
      let posicionLetraDni = dniSinLetra % 23; //? Calculamos la posicion donde esta la letra del dni, esto lo sabemos por el resto de la division

      console.log('%cEl resto de la division es: ' + posicionLetraDni, 'color: green; font-size: 16px;'); 
      
      let calcularLetraDni = letras[posicionLetraDni]; //? Aqui estamos buscando que letra hay en el indice 17 del array. Basicamente hace: me meto dentro del array letras y voy recorriendo hasta llegar al indice 17 en mi caso y devuelvo la letra que hay en el indice 17.

      console.log('%cEn la posicion ' + posicionLetraDni + ' del el array letras  esta la letra: ' + calcularLetraDni, 'color: green; font-size: 16px;');

      //todo Comprobamos que la letra que he calculado sea igual a la que me ha pasado el usuario por teclado (pero la diferencio con la variable letraDelDni que solo tiene la letra del dni).

      if (calcularLetraDni === letraDelDni) { //? Comparamos si la letra que he calculado es igual a la letra del dni que me ha pasado el usuario por el input 
        console.log('%c Las letras son iguales', 'color: green; font-size: 16px;');
        return calcularLetraDni === letraDelDni; //? devuelve true, porque son iguales
    } else {
        console.log('%c El dni  NO es valido, te has equivocado al poner el dni porque he calculado la letra: ' + calcularLetraDni + ' y la letra que has introducido en el input es ' + letraDelDni , 'color: red; font-size: 10x;');
    }



     }

     function comprobarDni(){
      let dniInput = document.getElementById("dni").value.trim();  //* Recogemos lo que escribe el usuario por el input de DNI y lo guardamos en la variable dniInput con los espacios de delante y detras quitamos.
      if (validadDni(dniInput)){
        console.log('%c El dni es valido ', 'color: green; font-size: 16px;');
      } else {
        console.log('%c El dni  NO es valido ', 'color: red; font-size: 16px;');
      }
    }





    //todo Validando el correo

  //* Guardar en la variable emailInput lo que escribe el usuario en el input

  var emailInput = document.getElementById("email_id").value.trim(); //* el value lo pongo para obtener el valor actual del input
  setCookie("email" , emailInput , 1); //? Almaceno el valor de email en el input

  //* Primero tengo que sacar en que posicion esta el @

  var arroba = emailInput.indexOf("@");

  //*  y sacar la posicion de donde esta el ultimo punto.
  var ultimoPunto = emailInput.lastIndexOf(".");

  if (arroba === -1 && ultimoPunto === -1) { //! si no existe ni el . , ni el @ te muestra el siguiente mensaje de error
    console.log("%cError: el correo no tiene ni la @ , ni el .", "color: red;");
    problemaValidacion = true //? Existe un problema de validacion
  } else if (arroba === -1) { //!si no esta el @ mostramos el error
    console.log("%cError: el correo no tiene un @", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto === -1) { //! si no existe el punto mostramos el error.
    console.log("%cError: el correo no tiene un .", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === emailInput.length - 1) { //! si el arroba esta en la ultima posicion, es porque despues del arroba no hay ninguna cadena
    console.log(
      "%c Error: el @ no puede estar en la ultima posción",
      "color:red;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === 0) {//! si el arroba esta en la posicion 0 es porque delante del arroba no hay una cadena
    console.log(
      "%cError: el @ no puede estar en la primera posición",
      "color: red;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto <= arroba + 1) { //! Si entre el punto y el arroba no hay ningun texto muestro el siguiente mensaje 
    console.log("%cError:  No hay texto entre el @ y el punto", "color: red;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else { //* Si no es porque el correo esta bien 
    console.log("%cEl gmail es valido", "color: grenn;");
  }



  //todo Validando la edad

  var edadInput = document.getElementById("edadInput").value.trim(); //? Recogo lo que introduce el usuario por teclado

  let edadNumero = parseInt(edadInput); //? lo paso a entero

  setCookie("edad" , edadNumero , 1);

  // verificar si edadNumero es un numero (isNan) y es entero (isInteger).
  if (!isNaN(edadNumero) && Number.isInteger(edadNumero)) {
    console.log("%cEl número es entero", "color: green;");
  } else {
    console.log("%cError: El número no es entero o no es un número válido", "color: red;");
    problemaValidacion = true;
  }



    //todo Validando que ningun campo este vacio

 if (nombreEntrada == "" || apellidosEntrada == "" || entradaDireccion == "" || edadInput == "" || emailInput == "" ){
  console.log("%cError: No puede haber ningun campo vacio", "color: red;");
  problemaValidacion = true; //? Hay un problema de validacion
}





//todo convertir estructura de un array a un JSON 

let datosPersona = {
  nombre:NombreInput,
  matricula:inputMatricula
}
arrayMatriculas.push(datosPersona)

let datosPersonaJSON = JSON.stringify(datosPersona); //? Convertir el array datosPersona en un json.
console.log("Json ->" + datosPersonaJSON);




//todo Poner la primera letra de una cadena en Mayuscula 

// Obtener el valor del input y eliminar espacios en blanco
let nombreAlumno = document.getElementById("nombreAlumno").value.trim();

// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Aplicar la función al valor obtenido
let nombreAlumnoCapitalizado = capitalizeFirstLetter(nombreAlumno);

console.log(nombreAlumnoCapitalizado); // El nombre con la primera letra en mayúscula





//todo Metodo para borrar la asignatura de un alumno pasado el nombre, esta funcion esta en el formulario para el examen.

//? 1º Metodo 

//* Podemos comprobar lo que sea cambiando lo siguiente arrayUsuariosFormulario[i].dni ese dni lo podemos cambiar por cualquier clave que tenga el array apellidos, nombre , fecha de nacimineto.
function existeNombre (nombreComprobar){

  for (let i = 0; i < arrayUsuariosFormulario.length; i++) {
    
    if (arrayUsuariosFormulario[i].nombre === nombreComprobar){ //? Recorremos el valor de la clave asignatura en cada indice del array
      return i; //* Si existe me devuelve el indice donde esta el valor.
    } 
  }
  return -1; //* Si no existe me devuelve -1

}

//? 2º Metodo y el que borra: 

  //* Funcion que "elimina la asigntura que esta matriculado el usuario" (lo deja sin valor) dado el nombre del usuario.

  function borrarAsignatura (){

    let nombreAlumno = document.getElementById("nombreAlumno").value.trim();

    let indiceNombreAlumno = existeNombre(nombreAlumno);

    if (indiceNombreAlumno !== -1){ //* Si es distinto de -1 es porque existe el nombre del alumno

      //? Accedemos al array 'arrayUsuariosFormulario', posicionándonos en el índice indicado por 'indiceNombreAlumno'.
      //? Este índice se obtuvo de la función 'existeNombre', que devuelve la posición del objeto en el array cuyo 'nombre' coincide con el nombre que le pasamos por parametro.
      //? Una vez localizado el objeto correcto en el array, accedemos a su propiedad 'asignatura'.
      //? En lugar de eliminar el objeto completo, lo que hacemos es establecer el valor de la propiedad 'matricula' de este objeto a un string vacío ("").
      //? Esto efectivamente "borra" la matrícula (dejándola en blanco o nula) pero mantiene el objeto, incluido el nombre y cualquier otra propiedad, en el array.


      arrayUsuariosFormulario[indiceNombreAlumno].asignatura = "";
      console.log(arrayUsuariosFormulario);

    } else {
      console.log("No existe un alumno con el nombre " + nombreAlumno);
    }

  }

// todo Otro ejemplo de como borrar la asignatura pero pasando el dni que tiene mas sentido ya que no se puede repetir. esta funcion esta en el formulario para el examen.

//? 1º metodo
function existeDni (dniComprobar){

  for (let i = 0; i < arrayUsuariosFormulario.length; i++) {
    
    if (arrayUsuariosFormulario[i].dni === dniComprobar){ //* Recorro y compruebo cada valor de la clave dni y si coincide con el dniComprobar devuelvo el indice donde esta el dni.

      return i;
    }
  }
  return -1 //* Si no lo encuentro devuelvo -1.

}


//? 2º metodo, este es el que borra pasado el dni.

function borrarAsignaturaAlumnoPasandoUnDni(){

  let inputDni = document.getElementById("inputDniBorrar").value.trim();

  let letIndiceDelDniEscritoInput = existeDni(inputDni) //* Esto si lo encuentra va a devolver el indice donde se encuentra el dni.

  if (letIndiceDelDniEscritoInput !== -1){ //* Si es distinto de -1 es porque el dni existe y devuelve una posicion.


    arrayUsuariosFormulario[letIndiceDelDniInput].asignatura = ""; //? Se mete dentro del array y se posiciona en el indice donde esta el dni  y a continuacion accede al valor de la clave asignatura y la deja en blanco.
    console.log(arrayUsuariosFormulario);
  } else{
    //! No se ha encontrado el dni y por lo tanto no puedo borrar la asignatura del alumno.
  }

}





  
  