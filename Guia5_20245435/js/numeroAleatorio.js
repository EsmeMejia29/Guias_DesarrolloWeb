// Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
// Creamos una constante que permite identificar el maximo de intentos
const numeroIntentos = 3;
// Guardamos el numero de intentos que realiza el usuario
let intentos = 0;

function generarNumeroAleatorio() {
	//Definimos una variable para impresion de mensajes
	let mensaje;
	// Utilizamos el dom para acceder al parrafo creado
	const parrafo = document.querySelector("#idParrafo");

	// Verificamos en que intento esta el usuario
	if (intentos <= numeroIntentos) {
		let numero = prompt(
			"¿Que número se ha generado (Intento " + intentos + ")?"
		);
        
        //verificamos el numero aleatorio con el ingresado por el usuario
        if (numero == numeroAleatorio) {
            mensaje = `¡Es sorprente, pudiste adivinar el número oculto (${numeroAleatorio}). 
            Refresque la página para volver a jugar.`;
        } else if (intentos < numeroIntentos) {
            mensaje = `El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {
            mensaje = `Vuelve a intentar. Quedan ${
                numeroIntentos - intentos
            } intentos`;
        }

            //aumentamos el valor de los intentos
            intentos++;
        } else {
            mensaje = `Su número de intentos ha terminado. 
            El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        }
    parrafo.innerHTML = mensaje;
}