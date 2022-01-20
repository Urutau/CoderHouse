const URLGET = "https://api.jsonbin.io/b/61e7130ddbe5d130832813b4/latest";
const URLGET2 = "productos.JSON";

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

//Este bloque es el que muestra el JSON almacenado en JSONBin
$("#bJSON").on("click", getProductosJSON)
function getProductosJSON () {
$.getJSON (URLGET, function (respuesta, estado) {
    if (estado === "success") {
        $("#divJSON").prepend(`<h2>Catálogo actual de productos financieros (en JSONBin):</h2>`);
        let productos = respuesta;
        for (const producto of productos) {
            $("#divJSON").append(
                `<p>ID: ${producto.id}<br>
                Nombre: ${producto.nombre}<br>
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

// Este es el bloque que muestra el listado de productos obtenido del JSON local, se imprime en el espacio derecho 
// de la página desde el botón "Mostrar listado de productos"
$("#bListado").click( () => mostrarProductos() );
function mostrarProductos () {
    $.getJSON(URLGET2, (respuesta, estado) => {

        if (estado === "success"){
            
            let productosJSON = respuesta;

            $("#divProductos").prepend(`<h2>Listado actual de productos financieros:</h2>`);
            $("#divProductos").append(productosJSON.forEach(producto => {
                $("#divProductos").append(`<p>
                    ID: ${producto.id}
                    <br>
                    Producto: ${producto.nombre}
                    <br>
                    Duración: ${producto.duracion} días
                    <br>
                    Volatilidad: ${producto.volatilidad}
                    <br>
                    Liquidez: ${producto.liquidez}
                    <br>
                    Beneficio: coeficiente ${producto.beneficio}
                    </p>`
                )
            }));
        }
    })
}