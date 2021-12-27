
let bUsuario = document.getElementById("bUsuario");
bUsuario.onclick = () => nuevoUsuario(); 

let bTest = document.getElementById("bTest");
bTest.onclick = () => test();

let b203050 = document.getElementById("b203050");
b203050.onclick = () => veinte3050();

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let bNuevaInversion = document.getElementById("bNuevaInversion");
bNuevaInversion.onclick = () => nuevaInversion();

let arrow = document.getElementById("arrow");
arrow.onmouseover = () => cambiarArrow();

let arrow2 = document.getElementById("arrow");
arrow2.onmouseleave = () => cambiarArrow2();

let bListado = document.getElementById("bListado");
bListado.onclick = () => mostrarProductos();

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