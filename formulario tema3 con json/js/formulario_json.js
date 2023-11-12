let arrayUsuariosFormulario = []; //* Definimos el array de usuarios vacia.
//! Formulario controlado con un json
function pad(n) { 
  return n < 10 ? '0' + n : n; //? Si n es menor que 10, pongo un 0 + el numero (2 es menor que 10 por lo tanto --> 02), si no devuelve el numero 10 , 11 12 ....
}

//? Funcion para que se guarde la cookie una hora
function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 1000); // Añadir 1 hora en milisegundos
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

  

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




  //todo Guardar las cookies de cada input

  function guardar_cookies() {
    let problemaValidacion = false; //? Variable para saber si todos los datos se han validado y no hay ningun error y son correctos
    //todo Recogemos lo que el usuario escribe por cada input
    let input_nombre = document.getElementById("nombre").value.trim();

    //Guardar lo que ha seleccionado el usuario en el radiobuttom
    let RadioSeleccionado = document.querySelector("input[name='modoAcceso']:checked").value.toUpperCase();
    console.log(RadioSeleccionado);


    //! --------------------------------------- VALIDACION DE NOMBRE -------------------------------------
    
    let longitudNombre = 4
    
    if (input_nombre.length < longitudNombre){ //* Si la longitud de caracteres que introduce el usuario por el input es menor a la longitud definida, mostramos error.
      problemaValidacion = true;
      console.log("%cError: El nombre debe tener al menos " + longitudNombre + " caracteres. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    }
    //! --------------------------------------- FIN VALIDACION DE NOMBRE -------------------------------------

    let input_apellidos = document.getElementById("apellidos").value.trim();
    /* let input_dni = document.getElementById("dni").value; */ //! lo recogemos en la validacion del dni
    let input_telefono = document.getElementById("telefono").value.trim();

    //! -----------------------------------------  VALIDACION DE TELÉFONO  ----------------------------------
    
    if (input_telefono.length !== 9){
      console.log("%cError: El telefono debe contener " + 9 + " numeros. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    }

    //! -----------------------------------------  FIN VALIDACION DE TELÉFONO  ----------------------------------

    /* let input_email = document.getElementById("email").value; */ //! lo recogemos en la validacion del email

    //todo Validamos los datos los datos 
    //* El nombre, apellidos dni telefono y email no pueden estar vacios 
    //* Validacion de dni 
    //* Validacion de email
    //? Si hay algun error, muestro un mensaje por pantalla de que hay un error y que no se han almacenado las cookies 
    //* Si no hay ningun error, muestro un mensaje por pantalla de que se han guardado y las guardo con setcookie
    

    //!  Validacion de dni 

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

      let input_dni = document.getElementById("dni").value.trim(); //? Recojo lo que escribe el usuario por el input, le quito los espacios

      console.log('%cEl dni que ha introducido el usuario es: ' + input_dni, 'color: green; font-size: 16px;');


      let dniSinLetra = parseInt(input_dni.slice(0, -1)); //? Elimino el ultimo caracter que es la letra del dni

      console.log('%cEl dni sin la letra es: ' + dniSinLetra, 'color: green; font-size: 16px;');

      let letraDelDni = input_dni.slice(-1) //? Almaceno solamente la letra

      console.log('%cLa letra del dni es: ' + letraDelDni, 'color: green; font-size: 16px;');

      //todo Hacemos la division y nos quedamos con el resto, para saber en que posicion del array letras esta mi letra, con mi dni es la posicion 17 que es la V  
      let posicionLetraDni = dniSinLetra % 23; //? Calculamos la posicion donde esta la letra del dni, esto lo sabemos por el resto de la division

      console.log('%cEl resto de la division es: ' + posicionLetraDni, 'color: green; font-size: 16px;'); 
      
      let calcularLetraDni = letras[posicionLetraDni]; //? Aqui estamos buscando que letra hay en el indice 17 del array. Basicamente hace: me meto dentro del array letras y voy recorriendo hasta llegar al indice 17 en mi caso y devuelvo la letra que hay en el indice 17.

      console.log('%cEn la posicion ' + posicionLetraDni + ' del el array letras  esta la letra: ' + calcularLetraDni, 'color: green; font-size: 16px;');

      //todo Comprobamos que la letra que he calculado sea igual a la que me ha pasado el usuario por teclado (pero la diferencio con la variable letraDelDni que solo tiene la letra del dni).

      if (calcularLetraDni === letraDelDni) { //? Comparamos si la letra que he calculado es igual a la letra del dni que me ha pasado el usuario por el input 
        console.log('%c Las letras son iguales', 'color: green; font-size: 16px;');
        console.log('%c El dni es valido ', 'color: green; font-size: 16px;');
        /* return calcularLetraDni === letraDelDni; //? devuelve true, porque son iguales */
    } else {
        problemaValidacion = true;
        console.log('%c El dni  NO es valido, te has equivocado al poner el dni porque he calculado la letra: ' + calcularLetraDni + ' y la letra que has introducido en el input es ' + letraDelDni , 'color: red; font-size: 16x;');
    }


    //! ---------------------------------------- VALIDACION DE EMAIL -----------------------------
    
    var input_email = document.getElementById("email").value.trim(); //* el value lo pongo para obtener el valor actual del input
    
    //* Primero tengo que sacar en que posicion esta el @
    
    var arroba = input_email.indexOf("@");
    
    //*  y sacar la posicion de donde esta el ultimo punto.
    var ultimoPunto = input_email.lastIndexOf(".");
    
    if (arroba === -1 && ultimoPunto === -1) { //! si no existe ni el . , ni el @ te muestra el siguiente mensaje de error
      console.log("%cError: el correo no tiene ni la @ , ni el .", "color: red; font-size: 16px;");
      problemaValidacion = true //? Existe un problema de validacion
    } else if (arroba === -1) { //!si no esta el @ mostramos el error
      console.log("%cError: el correo no tiene un @", "color: red; font-size: 16px;");
      problemaValidacion = true; //? Existe un problema de validacion
    } else if (ultimoPunto === -1) { //! si no existe el punto mostramos el error.
      console.log("%cError: el correo no tiene un .", "color: red; font-size: 16px;");
      problemaValidacion = true; //? Existe un problema de validacion
    } else if (arroba === input_email.length - 1) { //! si el arroba esta en la ultima posicion, es porque despues del arroba no hay ninguna cadena
      console.log(
        "%c Error: el @ no puede estar en la ultima posción",
        "color:red; font-size: 16px;"
        );
        problemaValidacion = true; //? Existe un problema de validacion
      } else if (arroba === 0) {//! si el arroba esta en la posicion 0 es porque delante del arroba no hay una cadena
        console.log(
          "%cError: el @ no puede estar en la primera posición",
          "color: red; font-size: 16px;"
          );
          problemaValidacion = true; //? Existe un problema de validacion
        } else if (ultimoPunto <= arroba + 1) { //! Si entre el punto y el arroba no hay ningun texto muestro el siguiente mensaje 
          console.log("%cError:  No hay texto entre el @ y el punto", "color: red; font-size: 16px; ");
          problemaValidacion = true; //? Existe un problema de validacion
        } else { //* Si no es porque el correo esta bien 
          console.log("%cEl gmail es valido", "color: green; font-size:16px;");
        }

        //! ---------------------------------------- FIN VALIDACION DE EMAIL -----------------------------
        
        
        //!  ------------------------------------- VALIDACION PARA QUE LOS CAMPOS NO ESTEN VACIOS ----------------------------------------
        if (input_nombre == "" || input_apellidos == "" || input_dni == "" || input_telefono == "" || input_email == ""){
          problemaValidacion = true;
          console.log("%cError: No puede haber ningun campo vacio", "color: orange; font-size:17px;");
        }

        //!  ------------------------------------- FIN VALIDACION PARA QUE LOS CAMPOS NO ESTEN VACIOS ----------------------------------------


        //! ------------------------------------- VALIDACION PARA LA FECHA -------------------------------------

        let fechaInput = document.getElementById("fechaNacimiento").value.trim(); //* Recogemos la fecha que el usuario ha introducido por teclado

        const partesFecha = fechaInput.split("/");  //* Dividimos la fecha en partes usando el separador /, devuelve un array con 3 indices [0] => dia, [1] => mes , [2] => año

        //console.log(partesFecha);

        if (partesFecha.length === 3){ //* Si la fecha tiene 3 partes 

          const dia = parseInt(partesFecha[0] , 10); //? Tomamos el primer indice del array en este caso el dia y lo pasamos a entero, el 10 indica que la conserviosn se debe hacer en base decimal, para que ponga 8 en decimal
          const mes = parseInt(partesFecha[1] , 10) //? tomamos el segundo indice en este caso el mes y lo pasamos a enteero, el 10 indica que la conversion se debe hacer en base decimal.
          const anio = parseInt(partesFecha[2] , 10) //? Tomamos el tercer indice en este caso el año y lo pasamos a entero, el 10 indica que la conversion se debe hacer en base decimal.

          console.log("Día:", dia, "Mes:", mes, "Año:", anio);


          //todo Empezamos con las validaciones

          if (dia < 1 || dia > 31){ //* Si el dia se pasa del rango de 1 y 31, tenemos un error de validacion 
            problemaValidacion = true;
            console.log("Error de validación: El día está fuera de rango.");

          }

          if (mes < 1 || mes > 12){ //* Si el mes se pasa del rango de 1-12, tenemos un error de validacion
            problemaValidacion = true;
            console.log("Error de validación: El mes está fuera de rango.");
          }

          if (anio.toString().length != 4){ //* Pasamos el año a string si el numero de caracteres de anio es distinto de 4, tenemos un error de validacion (porque el año tiene 4 numeros).
            problemaValidacion = true;
            console.log("Error de validación: El año no tiene cuatro dígitos.");

          }

          if ((mes === 4 || mes === 6 || mes === 9 || mes === 11 ) && dia === 31){ //* Verifica si el mes es abril, junio, septiembre o noviembre, que son los meses que tienen 30 días. Si alguno de estos meses tiene asignado el día 31, marca un error de validación,ya que estos meses solo deben tener hasta 30 días.
            problemaValidacion = true;
            console.log("Error de validación: El mes no tiene 31 días.");

          }
         // Verifica si el mes es febrero (mes 2).
        if (mes === 2){
        // Calcula si el año es bisiesto. Un año es bisiesto si es divisible por 4,
        // excepto aquellos años que son divisibles por 100, a menos que también sean divisibles por 400.
        const esBisiesto = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0));

        // Si el día es mayor a 29, o si es 29 y el año no es bisiesto (febrero solo tiene 29 días en un año bisiesto),
        // entonces hay un problema de validación.
        if (dia > 29 || (dia === 29 && !esBisiesto)) {
        problemaValidacion = true;
        console.log("Error de validación: Febrero no tiene más de 29 días o no es año bisiesto y se está intentando poner el día 29.");
        }
      } else {
        console.log("La fecha es correcta");
      }

        } else { //* Si la fecha no tiene 3 partes 

          console.log("Error, la fecha no tiene 3 partes");

        }




        //! ------------------------------------- FIN VALIDACION PARA LA FECHA -------------------------------------

    
        //? abrir una ventana u otra si hay un error o mas en las validaciones o si no hay ningun error 

  if (!problemaValidacion){ //* Si no hay errores de validacion 

     

     //todo Primero tengo que verificar que el dni que me metan no este repetido
   if (!existeDni(input_dni)){ //* Si la funcion existeDni no me devuelve errores, guardo el usuario.
    //todo Almacenamos en las cookies lo que introuce el usuario en los inputs 
    setCookie("nombre" , input_nombre , 1); // Almacena el nombre que ha introducido el usuario por el input durante 1 hora
    setCookie("apellidos" , input_apellidos , 1); // Almacena el Apellido que ha introducido el usuario por el input durante 1 hora
    setCookie("dni" , input_dni , 1); // Almacena el dni que ha introducido el usuario por el input durante 1 hora
    setCookie("telefono" , input_telefono , 1); // Almacena el telefono que ha introducido el usuario por el input durante 1 hora
    setCookie("email" , input_email , 1); // Almacena el email que ha introducido el usuario por el input durante 1 hora
    setCookie("fecha_nacimiento" , fechaInput , 1);
    setCookie("asignatura" , RadioSeleccionado , 1); // Almacenamos lo que seleccona el usuario en el radioboton
    //todo Creamos la estructura del json y le pasamos en cada clave el valor que escribe el usuario en los inputs.
    let jsonUsuario = {
      nombre:input_nombre,
      apellidos:input_apellidos,
      dni:input_dni,
      telefono:input_telefono,
      email:input_email,
      fecha_nacimiento: fechaInput,
      asignatura: RadioSeleccionado
    };

    //todo cada vez que le damos a guardar añadimos al vector el json de ese usuario: 

    arrayUsuariosFormulario.push(jsonUsuario);
    console.log(arrayUsuariosFormulario);

    document.getElementById("mensaje_añadido_user_array").textContent = "El usuario " + jsonUsuario.nombre + " ha sido añadido al vector exitosamente";
  

    abrirVentanaValidacionCorrecta();
    

  } else { //? Si no es por que hay un dni repetido 

    document.getElementById("mensaje_añadido_user_array").textContent = "Error: Ya existe un usuario con este mismo DNI";
    console.log("%cError: Ya existe un usuario con este mismo DNI", "color: orange; font-size: 16px; ");
    problemaValidacion = true;
    abrirVentanaValidacionErronea(); //* Abrimos la ventana de error, si el dni esta repetido 
  }
  } else {
     // Manejo de cualquier otro error de validación
     abrirVentanaValidacionErronea();
  }
}



  //todo Funcion que verifica que no se introduzca un dni repetido
    function existeDni(dniBuscado) {
      //? 1º forma 
      // Recorremos todo el array de usuarios
      for (let i = 0; i < arrayUsuariosFormulario.length; i++) {
        //* Vamos recorriendo cada dni del array y comparando con el buscado
        if (arrayUsuariosFormulario[i].dni === dniBuscado) {
          //! Si se encuentra una coincidencia, retornamos true inmediatamente y tendremos un error
          return true;
        }
        //? No necesitamos un else aquí porque si el if no se cumple,
        //? simplemente continuamos con la siguiente iteración del bucle
      }
      //* Si salimos del bucle sin haber retornado true, significa que no se encontró el DNI
      return false;
    }


    //? 2º Forma 
    //*  La función anónima que pasas a some() verifica si el dni de algún usuario en arrayUsuariosFormulario es igual al dni que se está buscando.
    //*Si encuentra un DNI repetido: some() devuelve true tan pronto como se encuentra un usuario con un DNI que coincide con dni. 
    //* Si no encuentra un DNI repetido: some() devuelve false después de verificar todos los usuarios y no encontrar ninguno con el DNI buscado.
 /*  return arrayUsuariosFormulario.some(function (usuario) {
    return usuario.dni === dni; // Comparamos el DNI del usuario actual del array con el DNI que queremos verificar
  }); */


//* Funcion que ejecuta el boton "Buscar dni" que busca de quien es el dni introducido por el input
  const buscarDni = () => {
    let dniAbuscar = document.getElementById("buscarDniInput").value.trim().toUpperCase();

    let dniUsuarioEncontrado = arrayUsuariosFormulario.find(jsonUsuario => jsonUsuario.dni === dniAbuscar) //* find() devuelve el primer elemento que cumple con la condición especificada.Cuando alumnoEncontrado es asignado con el resultado de .find(), se convierte en una referencia al objeto del array alumnos que coincidió con el criterio de búsqueda. Dicho objeto tiene una estructura que has definido anteriormente al crearlo, que incluye las propiedades nombre, Apellidos, email, dni, y fecha_nacimiento. Dado que alumnoEncontrado es uno de estos objetos, puedes acceder a sus propiedades directamente usando la notación de punto.

    if (dniUsuarioEncontrado){ //* Si se ha encontrado el dni del alumno
      console.log('%cEl DNI ' + dniAbuscar + ' es de ' + dniUsuarioEncontrado.nombre, 'color: green; font-size: 20px;');
      document.getElementById("mostrar_mensaje_dni").textContent = " El DNI -> " + dniAbuscar + " es del alumno/a " + dniUsuarioEncontrado.nombre;
    } else { //* Si no se ha encontrado el dni 
      console.log('%cNo ha sido encontrado un alumno con el DNI ' + dniAbuscar, 'color: red; font-size: 20px;');
      document.getElementById("mostrar_mensaje_dni").textContent = " El DNI -> " + dniAbuscar + " no ha sido encontrado, verifica el dni y vuelve a intentarlo";
      mensaje.classList.add("error-mensaje"); // Añade la clase para texto en rojo
      mensaje.classList.remove("mensaje-verde"); // Elimina la clase de mensaje verde si está presente
    }

  }


  //* Funcion que ejecuta el boton "Buscar Alumnos" que busca todos los alumnos que estan matriculados en una asignatura

  const buscarAlumnosPorAsignatura = () => {

    let arrayAlumnosEnAsignatura = []; //? Creamos el array donde se van a almacenar el nombre de los alumnos que estan matriculados en la asginatura que se busque.
    let asignaturaAbuscar = document.getElementById("buscarAsignaturaInput").value.trim().toUpperCase(); //? Recogemos lo que se introduce en el input

    arrayUsuariosFormulario.forEach(jsonUsuario => { //? Recorremos nuestro array de usuarios, el que tiene el json con todos los atributos de nombre etc... y le definimos un elemento que en este caso es el nombre de mi json.
      if (jsonUsuario.asignatura === asignaturaAbuscar){ //? Si el alumno del array arrayUsuariosFormulario esta matriculado en la asignatura que estamos buscando (asignaturaBuscada)
        arrayAlumnosEnAsignatura.push(jsonUsuario.nombre); //? Añadimos el nombre del alumno
      }


      //todo Si el arrayAlumnosEnAsignatura esta vacia, es porque no se ha encontrado ningun alumno matriculado en esa asignatura.

      if (arrayAlumnosEnAsignatura.length === 0){
        console.log('%c No se ha encontrado ningun alumno que este matriculado en la asignatura ' + asignaturaAbuscar, 'color: red; font-size: 20px;');
        document.getElementById("mostrar_mensaje_asignatura").textContent = " No se ha encontrado ningun alumno que este matriculado en la asginatura  " +  asignaturaAbuscar ;
      } else { //todo Si no, es porque ha encontrado como minimo una persona.
        console.log('%cEn la asignatura ' + asignaturaAbuscar + ' están matriculados ' + arrayAlumnosEnAsignatura.join(', '), 'color: green; font-size: 20px;');
        document.getElementById("mostrar_mensaje_asignatura").textContent = " En la asignatura -> " + asignaturaAbuscar + " estan matriculados los siguientes alumnos: " + arrayAlumnosEnAsignatura;
      }

      console.log(arrayAlumnosEnAsignatura);

    })


  }


  

function abrirVentanaValidacionCorrecta(){

  const url = "validacion_correcta.html";

    // Dimensiones de la ventana que quieres abrir
    var ancho = 550;
    var alto = 800;

    // Calcula la posición x e y para centrar la ventana
    var posicionX = (window.screen.width / 2) - (ancho / 2);
    var posicionY = (window.screen.height / 2) - (alto / 2);

    // Asegúrate de que las posiciones no sean negativas
    posicionX = posicionX < 0 ? 0 : posicionX;
    posicionY = posicionY < 0 ? 0 : posicionY;

    // Abre la nueva ventana centrada
    var nuevaVentana = window.open(url, "ventana1", "width=" + ancho + ",height=" + alto + ",left=" + posicionX + ",top=" + posicionY + ",scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

    // Enfoca la nueva ventana en caso de que el navegador lo permita
    if (window.focus) {
        nuevaVentana.focus();
    }

}


function abrirVentanaValidacionErronea(){

  const url = "problemas_validacion.html";

    // Dimensiones de la ventana que quieres abrir
    var ancho = 550;
    var alto = 800;

    // Calcula la posición x e y para centrar la ventana
    var posicionX = (window.screen.width / 2) - (ancho / 2);
    var posicionY = (window.screen.height / 2) - (alto / 2);

    // Asegúrate de que las posiciones no sean negativas
    posicionX = posicionX < 0 ? 0 : posicionX;
    posicionY = posicionY < 0 ? 0 : posicionY;

    // Abre la nueva ventana centrada
    var nuevaVentana = window.open(url, "ventana1", "width=" + ancho + ",height=" + alto + ",left=" + posicionX + ",top=" + posicionY + ",scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");

    // Enfoca la nueva ventana en caso de que el navegador lo permita
    if (window.focus) {
        nuevaVentana.focus();
    }

    console.log('%c ***** Error no se ha podido almacenar el usuario en el vector, verifica tus datos con los errores mostrados por consola e intenta de nuevo  ', 'color: red; font-size: 16px;');

}













  //todo Funcion para saber si existe o no una cookie

  function existeCookie(){

    let comprobar_cookie = document.getElementById("existencia_cookie").value; //? Almaceno en la variable comprobar_cookie  lo que escribe el usuario por el input con nombre existencia_cookie, basicamente escribe la cookie que quiere comprobar si existe o no.

    if (getCookie(comprobar_cookie) != ""){ //* Si el valor que almacena la cookie que escribe el usuario por el input NO esta vacia, es porque existe
      console.log('%c La cookie ' + comprobar_cookie + " existe", 'color: green; font-size: 20px;');
    } else { //! Si no, Es porque la cookie no existe
      console.log('%cLa cookie ' + comprobar_cookie + " no existe", 'color: red; font-size: 20px;');
    }
    
  }


  //todo Recorrer las cookies almacenadas

  function mostrarCookies() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let [name, value] = cookie.split('=');
        console.log(`Clave: ${name}, Valor: ${value}`);
    }  
}


 //! ------------------------------ FUNCION QUE DEVUELVE LO QUE ALMACENAS LAS COOKIES EN OTRA PAGINA (VALIDACION_CORRECTA.HTML) -----------
 function mostrarDatosValidacionCorrecta(){
  //todo Devolvemos lo que almacenan las cookies 

  return{
    nombre:getCookie("nombre"),
    apellidos:getCookie("apellidos"),
    dni:getCookie("dni"),
    telefono:getCookie("telefono"),
    email:getCookie("email"),
    fechaNacimiento:getCookie("fecha_nacimiento"),
    asignatura:getCookie("asignatura")
  };
}


//todo Eliminar las cookies, que en realidad no la estamos borrando, solamente estamos quitando el valor de esa cookie, pero el nombre de la cookie sigue existiendo. 
function eliminar_cookies(){
  setCookie("nombre" , "");
  setCookie("apellidos" , ""); 
  setCookie("dni" , ""); 
  setCookie("telefono" , ""); 
  setCookie("email" , ""); 
  setCookie("Fecha" , "");
  console.log('%cSe han borrado las cookies de forma exitosa', 'color: green; font-size: 20px;');
}




// function eliminar_cookies() {
//   let cookies = ["nombre", "apellidos", "dni", "telefono", "email"];
//   for (let i = 0; i < cookies.length; i++) {
//       document.cookie = cookies[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   }
// }

//todo Ver Json

function verJson() {
  // Convertir el array de alumnos a una cadena JSON formateada
  var datosEnJson = JSON.stringify(arrayUsuariosFormulario, null, 2);

  if (window.jsonWindow && !window.jsonWindow.closed) { 
      // Si 'jsonWindow' existe y la ventana no está cerrada, actualiza el contenido
      window.jsonWindow.postMessage(datosEnJson, "*");
  } else { 
      // Si no hay pestaña abierta, abre una nueva y guarda la referencia
      window.jsonWindow = window.open('verJson.html');
      window.jsonWindow.onload = function () {
          this.postMessage(datosEnJson, "*");

          // Establecer actualización periódica
          setInterval(() => {
              var datosActualizados = JSON.stringify(arrayUsuariosFormulario, null, 2);
              this.postMessage(datosActualizados, "*");
          }, 5000); // Actualiza cada 5000 milisegundos (5 segundos)
      };
  }
}

//* 11 de noviembre 19:48







