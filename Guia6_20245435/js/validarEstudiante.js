const validarEstudiante = () => {
    let carnet = document.getElementById("txtCarnet").value;
    let nombre = document.getElementById("txtNombre").value;
    let dui = document.getElementById("txtDui").value;
    let nit = document.getElementById("txtNit").value;
    let fecha = document.getElementById("txtFecha").value;
    let correo = document.getElementById("txtCorreo").value;
    let edad = document.getElementById("txtEdad").value;
    
    let mensajeResultado = document.getElementById("mensajeResultado");
    let errores = []; // Arreglo para guardar los errores encontrados

    // Expresiones regulares en JS:
    let regexCarnet = /^[a-zA-Z]{2}\d{3}$/; //Carnet 
    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Nombre completo
    let regexDui = /^\d{8}-\d{1}$/; // DUI
    let regexNit = /^\d{4}-\d{6}-\d{3}-\d{1}$/; //Para validar el NIT
    let regexFecha = /^\d{2}\/\d{2}\/\d{4}$/; // Para fecha de nacimiento
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Para correo
    let regexEdad = /^\d+$/; //Para edad



    //Se comparan los campos y se validan:
    if (!regexCarnet.test(carnet)) {
        errores.push("El Carnet es inválido (Debe ser 2 letras y 3 números, ej: AB001)");
    }

    if (!regexNombre.test(nombre)) {
        errores.push("El Nombre es inválido (Solo letras y espacios)");
    }

    if (!regexDui.test(dui)) {
        errores.push("El DUI es inválido");
    }

    if (!regexNit.test(nit)) {
        errores.push("El NIT es inválido");
    }

    if (!regexFecha.test(fecha)) {
        errores.push("La fecha es inválida");
    }

    if (!regexCorreo.test(correo)) {
        errores.push("El correo electrónico es inválido");
    }

    if (!regexEdad.test(edad)) {
        errores.push("La edad debe contener solo números");
    }

    //Para mostrar los resultados:
    if (errores.length > 0) {
        // Unimos los errores con \n para que salgan en lista dentro de la alerta
        alert("Errores encontrados:\n" + errores.join("\n"));
    } else {
        alert("Todos sus datos son válidos. Gracias.");
    }
};