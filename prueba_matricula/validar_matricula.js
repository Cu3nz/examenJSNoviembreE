let arrayMatriculas = [];
function validarMatricula(){
    let inputMatricula = document.getElementById("InputMatricula").value.trim().toUpperCase();
    let NombreInput = document.getElementById("nombre").value.trim();

    //* EXpresion regular

    const expresMatricula = /^(\d{4}-?[A-Z]{3})$/;

    if (expresMatricula.test(inputMatricula)){ //? Si la matricula introducida por el input pasa la expresion regular

       if (!existeMatricula(inputMatricula)){ //? Y no esta ya almacenada en el array, la añadimos
        console.log("La matricula es valida");
        document.getElementById("mensaje_validacion_matricula").textContent = "La matricula es valida";
        let datosPersona = {
            nombre:NombreInput,
            matricula:inputMatricula
        }
        arrayMatriculas.push(datosPersona)
        console.log(arrayMatriculas)
        let datosPersonaJSON = JSON.stringify(datosPersona); //? Convertir el array datosPersona en un json.
        console.log("Json ->" + datosPersonaJSON);
        /* window.open('', '_blank').document.write(JSON.stringify(datosPersonaJSON)); */
       } else { //! Si no es porque ya esta almacenada.
        console.log("La matricula esta repetida");
        document.getElementById("mensaje_validacion_matricula").textContent = "Error, la matricula esta ya alamacenada, no se puede volver a almacenar";
       }
    } else { 
        document.getElementById("mensaje_validacion_matricula").textContent = "**** Error La matrícula no es válida. El formato debe ser '1234-ABC' o '1234ABC ";
    }

}





//todo metodo que verifica si la matricula ya esta añadida en el array.

function existeMatricula(MatriculaComprobar){

    for (let i = 0; i < arrayMatriculas.length; i++) {
       
        if (arrayMatriculas[i].matricula === MatriculaComprobar){ //? Recorremos el indice o la clave valor de matricula y vamos comprobando si el valor de esa clave es igual a la matricula que ha puesto el usuario en el input. Si es igual es porque ya esta almacenada en el array, por lo tanto no se puede almacenar de nuevo.
            return true; //* Devuelvo true, he encontrado la matricula por lo tanto esta ya almacenada, no se puede repetir
        }
        
    }
    return false; //* Devuelvo false porque no he encontrado la matricula

}


//todo metodo para saber la persona que tiene el coche dada la matricula.

const buscarNombrePorMatricula = () =>{

    let matriculaABuscar = document.getElementById("buscaMatricula").value.trim().toUpperCase();

    let personaEncontrada = arrayMatriculas.find(matricula  => matricula.matricula === matriculaABuscar); //* find devuelve el primer valor que cumple con la condicion especificada, en este caso que la matricula mandada por el input coincida con alguna matricula  que hay almacenada en el arrayMatriculas.

    if (personaEncontrada){ //* Si se encuentra la matricula.

        document.getElementById("Mostrar_mensaje_matricula").textContent = "La matricula " + matriculaABuscar + " es de " + personaEncontrada.nombre

    } else { //* Es que no se ha encontrado porque no esta almacenada la matricula en el arrayMatriculas
        document.getElementById("Mostrar_mensaje_matricula").textContent = " No se ha encontrado ningun nombre para la matricula " + matriculaABuscar;
    }

}