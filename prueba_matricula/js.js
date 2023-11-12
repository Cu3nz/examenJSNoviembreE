let arrayMatriculas = [];
function validarMatricula() {
  let InputMatricula = document.getElementById("InputMatricula").value.trim().toUpperCase();
  let NombreInput = document.getElementById("nombre").value.trim();

  // Expresión regular para validar la matrícula
  const expresMatricula = /^(\d{4}-?[A-Z]{3})$/;

  if (expresMatricula.test(InputMatricula)) {
    //? Si es valida la vamos a revisar si esta ya añadadida al array

    if (existeMatricula(InputMatricula)) { //* Si no esta en el array, decimos que es valida y la añadimos
      console.log("%cLa matrícula" + InputMatricula + " es válida y se ha añadido al vector.", "color: green;");
      document.getElementById("mensaje_validacion_matricula").textContent = "La matrícula" + InputMatricula + " es válida y se ha añadido al vector.";
      //? Añadimos los datos al array, pero con un nombre de clave para luego acceder de forma mas sencilla al valor.
      let datosPersona = {
        nombre:NombreInput,
        matricula:InputMatricula
    }
      arrayMatriculas.push(datosPersona);

    } else { //! si no, es porque esta ya almacenada y no se puede añadir al array.

    document.getElementById("mensaje_validacion_matricula").textContent = "Error, la matricula esta ya alamacenada, no se puede volver a almacenar";
    console.log("%cLa matrícula esta repetida.", "color: red;");
    }

  } else { //! Si no es porque no es valida,no ha cumpido la expresion regular.
    //? Si no es valida mostramos un error.
    console.log(
      "%cLa matrícula no es válida. El formato debe ser '1234-ABC' o '1234ABC'.",
      "color: red;"
    );

    document.getElementById("mensaje_validacion_matricula").textContent = "**** Error La matrícula no es válida. El formato debe ser '1234-ABC' o '1234ABC ";
  }
  console.log(arrayMatriculas);
}


//todo metodo que verifica si la matricula ya esta añadida en el array.

function existeMatricula(matriculaAbuscar) {
  for (let i = 0; i < arrayMatriculas.length; i++) {

    if (arrayMatriculas[i].matricula === matriculaAbuscar) {//? Recorremos el indice o la clave valor de matricula y vamos comprobando si el valor de esa clave es igual a la matricula que ha puesto el usuario en el input. Si es igual es porque ya esta almacenada en el array, por lo tanto no se puede almacenar de nuevo.

      return i; //* La matricula se ha encontrado en el array y devolvemos su indice.
    }
  }
  return -1; //* La matrícula no se encontró en el array, por lo tanto no existe, devolvemos -1
}



//todo metodo para saber el nombre de la persona que tiene el coche dada la matricula.

const buscarNombrePorMatricula = () => {
    let matriculaABuscar = document.getElementById("buscaMatricula").value.trim().toUpperCase();

    let personaEncontrada = arrayMatriculas.find(matricula => matricula.matricula === matriculaABuscar); //* find devuelve el primer valor que cumple con la condicion especificada, en este caso que la matricula mandada por el input coincida con alguna matricula  que hay almacenada en el arrayMatriculas.

    if (personaEncontrada){
        console.log("La matricula " + matriculaABuscar + " es de  " +  personaEncontrada.nombre); //* Por eso aqui devuelvo el nombre de la persona que tiene esa matricula con la variable MatriculaEncontrada.
        document.getElementById("Mostrar_mensaje_matricula").textContent = "La matricula " + matriculaABuscar + " es de " + personaEncontrada.nombre
    } else {
        console.log("No se ha encontrado ningun dni para la matricula " + matriculaABuscar);
        document.getElementById("Mostrar_mensaje_matricula").textContent = " No se ha encontrado ningun nombre para la matricula " + matriculaABuscar;
    }

}

function verJson() {
  // Convertir el array de alumnos a una cadena JSON formateada
  var datosEnJson = JSON.stringify(arrayMatriculas, null, 2);

  
  if (window.jsonWindow && !window.jsonWindow.closed) { //* // Comprueba si 'jsonWindow' existe y si la ventana referenciada no está cerrada

    window.jsonWindow.postMessage(datosEnJson, "*");//* Si la pestaña ya está abierta, actualiza el contenido

  } else { //* Si no hay pestaña abierta, abre una nueva y guarda la referencia
    
    window.jsonWindow = window.open('verJson.html');
    
    window.jsonWindow.onload = function () {//* Esperamos a que se cargue la pagina entera antes de cargar todos los datos
      this.postMessage(datosEnJson, "*");
    };
  }
} 



function borrarMatricula(){

  let matriculaABorrar = document.getElementById("eliminarMatricula").value.trim().toUpperCase();
  
  // Expresión regular para validar la matrícula
  const expresMatricula = /^(\d{4}-?[A-Z]{3})$/;

  if (expresMatricula.test(matriculaABorrar)){ //* Si la matricula pasa la expresion regular, la vamos a intentar borrar
    /* console.log("%cLa matrícula es válida.", "color: green;"); */
    //* Llamamos a la funcion existeMatricula que nos devuelve true si encuentra la matricula y false si no encuentra la matricula en el arrayMatriculas

    let indiceMatriculaABorrar = existeMatricula(matriculaABorrar); //* El metodo existeMatricula devuelve el indice donde esta la matricula que se quiere borrar si existe y si no existe devuelve -1.

    if (indiceMatriculaABorrar !== -1){ //? Si el indice es distinto de -1 es porque existe la matricula.

      //? Accedemos al array 'arrayMatriculas', posicionándonos en el índice indicado por 'indiceMatriculaABorrar'.
      //? Este índice se obtuvo de la función 'existeMatricula', que devuelve la posición del objeto en el array cuya 'matricula' coincide con la que se desea eliminar.
      //? Una vez localizado el objeto correcto en el array, accedemos a su propiedad 'matricula'.
      //? En lugar de eliminar el objeto completo, lo que hacemos es establecer el valor de la propiedad 'matricula' de este objeto a un string vacío ("").
      //? Esto efectivamente "borra" la matrícula (dejándola en blanco o nula) pero mantiene el objeto, incluido el nombre y cualquier otra propiedad, en el array.


      arrayMatriculas[indiceMatriculaABorrar].matricula = "";
      console.log(arrayMatriculas);
      /* console.log("borraremos la matricula"); */

    } else{ //! Si no mostramos un mensaje de que no se ha encontrado la matricula
      console.log("No se ha encontrado la matricula, por favor comprueba la matricula y vuelvve a intentarlo");
    }

  } else { //! Si no es que ni lo intento, muestro un mensaje de error de que no es valida
    console.log("%c**** Error No se ha podido borrar la matrícula porque no es válida. El formato debe ser '1234-ABC' o '1234ABC" , "color:red; font-size:13px;");
  }

}


//todo 12 a las  de la mañana
