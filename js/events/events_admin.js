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