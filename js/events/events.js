let arrow = document.getElementById("arrow");
arrow.onmouseover = () => cambiarArrow();

let arrow2 = document.getElementById("arrow");
arrow2.onmouseleave = () => cambiarArrow2();

let b203050 = document.getElementById("b203050");
b203050.onclick = () => veinte3050();

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

// let bNuevaInversion = document.getElementById("bNuevaInversion");
// bNuevaInversion.onclick = () => nuevaInversion();

// let bListado = document.getElementById("bListado");
// bListado.onclick = () => mostrarProductos();


function mostrarProductos () {
    let divProductos = document.getElementById("divProductos");
    let tituloListado = document.createElement("h2");
    tituloListado.innerHTML = `<h2>Listado actual de productos financieros:</h2>`
    divProductos.appendChild(tituloListado);
    let listado = document.createElement("p");
    productos.forEach(producto => {
        listado.innerHTML += `<p>
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
        divProductos.appendChild(listado)
    })
}

//Esta parte del código es para prevenir el submit del formulario y sumar los puntajes obtenidos del formulario.
//Quise seleccionar los elementos del DOM que contuvieran "pregunta" con document.getElementsByName(), pero no supe 
//establecer el filtro de selección (¿con un filter(), con una expresión regular?)
//Lo negativo de esta resolución, es que suma lo que entre por <input> así que tengo que poner cualquier otro formulario en otra página. 
//Esta parte del código devuelve acumulativo, así que elimino código anterior (función sumatoria() y su llamada).

let enviar = document.getElementById("formulario");
enviar.addEventListener("submit", submit)

function submit (e) {
e.preventDefault();
let preguntas = (document.getElementsByClassName("pregunta"))
    console.log(preguntas)
for (pregunta of preguntas) {
    pregunta.checked ? acumulativo += parseInt(pregunta.value) : acumulativo += 0; 
}
console.log(acumulativo)
//limpia el formulario
enviar.reset()
return acumulativo
}

let obtenerResultado = document.getElementById("obtenerResultado");
obtenerResultado.addEventListener("click", test)

let bUsuario = document.getElementById("bUsuario");
bUsuario.onclick = () => nuevoUsuario(); 
