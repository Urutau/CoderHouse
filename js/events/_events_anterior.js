let bUsuario = document.getElementById("crearUsuario");
bUsuario.onclick = () => nuevoUsuario(); 

let b203050 = document.getElementById("b203050");
b203050.onclick = () => veinte3050();

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let bNuevaInversion = document.getElementById("bNuevaInversion");
bNuevaInversion.onclick = () => nuevaInversion();

let arrow = $("#arrow")[0];
// document.getElementById("arrow");
arrow.onmouseover = () => cambiarArrow();

let arrow2 = $("#arrow")[0];
// document.getElementById("arrow");
arrow2.onmouseleave = () => cambiarArrow2();

//jQuery: shortcut
$("#bListado").click( () => mostrarProductos() );

//jQuery: prepend() y append()
function mostrarProductos () {
    $("#divProductos").prepend(`<h2>Listado actual de productos financieros:</h2>`);
    
    $("#divProductos").append(productos.forEach(producto => {
        $("#divProductos").append(`<p>
        Producto: ${producto.nombre}
        <br>
        Duración: ${producto.duracion} días
        <br>
        Volatilidad: ${producto.volatilidad}
        <br>
        Liquidez: en ${producto.liquidez} hs
        <br>
        Beneficio: coeficiente ${producto.beneficio}
        </p>`
        )})
    );
}
        
//Esta parte del código es para prevenir el submit del formulario, sumar los puntajes obtenidos del formulario e imprimir el resultado del test.

//jQuery: on()
$("#formulario").on("submit", submit);

// let enviar = document.getElementById("formulario");
// enviar.addEventListener("submit", submit)

function submit (e) {
    e.preventDefault();
    let preguntas = $(".pregunta");
    for (pregunta of preguntas) {
        pregunta.checked ? acumulativo += parseInt(pregunta.value) : acumulativo += 0; 
    }
    //limpia el formulario
    document.getElementById("formulario").reset();
    // enviar.reset()
    perfilDeInversor(acumulativo);
    $("#cuestionario").append(`<p class="perfil" id="perfil">Tu perfil de inversión es:\n${perfil}</p>`);
}