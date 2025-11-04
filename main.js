//EJERCICIO 1

let pilotos = [];
let finGestion = false;
let eleccion = 0;
let nom = "";
let pilotoBuscar = "";
let encontrado = false;
let nav = "";
let planet = "";
let numE = 0;
let pilotoC;

//Funciones

const mostrarPilotos = (pilotos) => {
    pilotos.forEach(piloto => {
        let {nombre, nave, planeta, exitos} = piloto;
        console.log(`Nombre: ${nombre} - Nave: ${nave} - Planeta: ${planeta} - Exitos: ${exitos}`);
    });
}

const mostrarMejorPiloto = (pilotos) => {
                pilotos.forEach(piloto => {
                    if(piloto.exitos >= numE){
                        numE = piloto.exitos;
                        pilotoC = piloto;
                    }
                });
                alert(`Nombre: ${pilotoC.nombre} - Nave: ${pilotoC.nave} - Planeta: ${pilotoC.planeta} - Exitos: ${pilotoC.exitos}`);
            }

//Inicio juego

console.log("¡Bienvenido a la academia galáctica!");

do {
    do {
        eleccion = prompt(`¿Qué deseas hacer?\n
                    1- Introducir nuevo piloto (nuevo)\n
                    2- Listar los pilotos registrados (listar)\n
                    3- Buscar un piloto (buscar)\n
                    4- Añadir un éxito a un piloto (exito)\n
                    5- Saber quién es el mejor piloto (mejor)\n
                    6- Salir del programa (salir)`);
        eleccion = parseInt(eleccion);

        if(eleccion < 1 && eleccion > 6){
            console.log("Por favor, introduce una opción válida");
        }
        
    } while (eleccion < 1 && eleccion > 6);

    switch(eleccion){
        case 1:
            console.log("Has elegido introducir piloto");

            nom = prompt(`Introduce el nombre del nuevo piloto`);
            nav = prompt(`¿Qué nave lleva?`);
            planet = prompt(`¿Cuál es su planeta de origen?`);

            pilotos += {
                nombre: nom,
                nave: nav,
                planetaOrigen: planet,
                exitos: 0
            }

            break;
        case 2:
            console.log("Has elegido listar pilotos");

            //Cuando creo un piloto y le doy a mostrar, me da error, pero dejo todo el código que seguro es una tontería.
            mostrarPilotos(pilotos);

            break;
        case 3:
            console.log("Has elegido buscar pilotos");

            pilotoBuscar = prompt(`Introduce el nombre del piloto que quieres buscar`).toLowerCase;

            pilotos.forEach(piloto => {
                if(piloto.nombre.toLowerCase === pilotoBuscar){
                    encontrado = true;
                    pilotoBuscar = piloto;
                }
            });

            if(encontrado){
                mostrarPilotos(pilotoBuscar);
            } else console.log("El piloto no existe");

            break;
        case 4:
            console.log("Has elegido añadir éxito a piloto");

            pilotoBuscar = prompt(`Introduce el nombre del piloto que quieres buscar`).toLowerCase;

            pilotos.forEach(piloto => {
                if(piloto.nombre.toLowerCase === pilotoBuscar){
                    encontrado = true;
                    pilotoBuscar = piloto;
                }
            });

            if(encontrado){
                pilotoBuscar.exitos++;
            } else console.log("El piloto no existe");

            break;
        case 5:
            console.log("Has elegido saber quién es el mejor piloto");

            mostrarMejorPiloto(pilotos);

            break;
        case 6:
            console.log("Has elegido salir de la gestión");

            finGestion = true;

            break;
        default:
            console.log("Error en ejecución");

            break;
    }
    
} while (!finGestion);

//EJERCICIO 2

let eleccion2 = 0;
let finCifrado = false;
let mensaje = "";

//Funciones

const cifrarMensaje = (mensaje) => {
    mensaje.toUpperCase;
    for(i = 0; i < mensaje.length; i++){
        if(mensaje[i] === "A"){
            mensaje[i] = "#";
        }
        if(mensaje[i] === "E"){
            mensaje[i] = "@";
        }
        if(mensaje[i] === "I"){
            mensaje[i] = "%";
        }
        if(mensaje[i] === "O"){
            mensaje[i] = "¿";
        }
        if(mensaje[i] === "U"){
            mensaje[i] = "ç";
        }
    }

    //Sé que era palabra por palabra como en el ejemplo, lo haría con .split() sobre el array pero no me da tiempo a más T_T xD
    let [...arraymensaje] = mensaje;
    console.log(arraymensaje.reverse());
}

const descifrarMensaje = (mensaje) => {
    let [...arraymensaje] = mensaje;
    let mensajeFinal = "";
    //Aquí iría el invertir el orden de las palabras con .split() de nuevo, pero repito, no me da xD
    arraymensaje.sort();
    for(i = 0; i < arraymensaje.length; i++){
        if(arraymensaje[i] === "#"){
            arraymensaje[i] = "A";
        }
        if(arraymensaje[i] === "@"){
            arraymensaje[i] = "E";
        }
        if(arraymensaje[i] === "%"){
            arraymensaje[i] = "I";
        }
        if(arraymensaje[i] === "¿"){
            arraymensaje[i] = "O";
        }
        if(arraymensaje[i] === "ç"){
            arraymensaje[i] = "U";
        }
    }
    for(i = 0; i < arraymensaje.length;i++){
        arraymensaje[i] += mensajeFinal;
    }
    mensajeFinal.toLowerCase;
    console.log(mensajeFinal);
}

//Inicio juego

console.log("¡Bienvenido al cifrador galáctico! Tus mensajes, siempre a salvo.");

do {
    do {
        eleccion2 = prompt(`¿Qué deseas hacer?\n
                    1- Cifrar un mensaje (cifrar)\n
                    2- Descifrar un mensaje (descifrar)\n
                    3- Salir del programa (salir)`);
        eleccion2 = parseInt(eleccion2);

        if(eleccion2 < 1 && eleccion2 > 3){
            console.log("Por favor, introduce una opción válida");
        }
        
    } while (eleccion2 < 1 && eleccion2 > 3);

    switch(eleccion2){
        case 1:
            console.log("Has elegido cifrar mensaje.");

            mensaje = prompt(`Introduce el mensaje a cifrar:`);

            cifrarMensaje(mensaje);

            break;
        case 2:
            console.log("Has elegido descifrar mensaje.");

            descifrarMensaje(cifrarMensaje(mensaje));

            break;
        case 3:
            console.log("Comunicación cerrada");

            finCifrado = true;

            break;
        default:
            console.log("Error en ejecución");

            break;
    }
    
} while (!finCifrado);