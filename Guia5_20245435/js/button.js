function aviso(){
    alert("Bienvenido al mundo de JavaScript!");
}

function confirmacion(){
    let confirmacion = confirm("¿Desea salir de la Sesión?");

    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("¿Cuál es su nombre?");
    //nótese que en campo del prompt se mostrará 0 por defecto
    let edad = prompt("¿Cuál es su edad?", 0);

    alert(`Su nombre es ${nombre} y su edad es ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el párrafo:"
    );

    /* Utilizaremos la API DOM para acceder al elemento
    <p id="idParrafo"></p> que hemos creado en nuestro documento HTML*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML =  parrafo;
}