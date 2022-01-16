let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

//Esta parte es la que maneja el submit del formulario y agrega un producto financiero al array que contiene el listado de productos
$("#agregarProducto").submit((e)=>{
    e.preventDefault();
    nuevaInversion();
})


$("#bJSON").on("click", getProductosJSON)

function getProductosJSON () {
$.getJSON (URLGET, function (respuesta, estado) {
    if (estado === "success") {
        let productos = respuesta;
        for (const producto of productos) {
            $("#divJSON").append(
                `<p>Nombre: ${producto.nombre}<br>
                Volatilidad: ${producto.volatilidad}<br>
                Duración: ${producto.duracion}<br>
                Liquidez: ${producto.liquidez}<br>
                Beneficio: ${producto.beneficio}<br>
                </p>`
            );
        }
    }
})
}

$("#bListado").click( () => mostrarProductos() );

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