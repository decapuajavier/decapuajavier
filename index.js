//Función para comprobar si la tecla presionada es "Enter"
function checkEnter(event) {
    if (event.keyCode === 13) {
        mostrarSaludo();
    }
}

// Función para obtener la respuesta de la picklist
function obtenerRespuestaPicklist() {
    // Obtener el elemento del menú desplegable
    var relacionElement = document.getElementById("relacion");
    // Obtener el valor seleccionado del menú desplegable para la relación
    var relacion = relacionElement.options[relacionElement.selectedIndex].value;

    // Determinar la respuesta según la opción seleccionada
    if (relacion === "familia" || relacion === "amigos") {
        return "¡Gracias por venir, espero que te guste!!";
    } else {
        return "Vamos a ganar dinero $";
    }
}

// Función para mostrar el saludo con el nombre y la relación introducidos
function mostrarSaludo() {
    // Obtener el valor del campo de entrada para el nombre
    var nombre = document.getElementById("nombre").value;
    // Obtener la respuesta de la picklist
    var respuesta = obtenerRespuestaPicklist();
    // Saludo completo
    var saludo = "¡Hola, " + nombre + "! Bienvenid@ a mi Espacio Digital. " + respuesta;

    // Mostrar el saludo en el contenedor correspondiente
    document.getElementById("saludo").textContent = saludo;
}