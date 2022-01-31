const URLGET = "https://api.jsonbin.io/b/61ed6e525c8caf43a69bd80d/latest";
const URLPUT = "https://api.jsonbin.io/v3/b/61ed6e525c8caf43a69bd80d";
const URLPOST = "https://api.jsonbin.io/v3/b/"
let infoPOST = productos;

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

function nuevaInversion () {
        producto1 = new Inversion(
        id = $("#idProd")[0].value,
        nombre = $("#nombreprod")[0].value, 
        duracion = $("#duracion")[0].value, 
        volatilidad = $("#volatilidad")[0].value, 
        liquidez = $("#liquidez")[0].value, 
        beneficio = $("#beneficio")[0].value
    );

    $.ajax({
        method : "PUT",
        url : URLPUT,
        data : infoPOST,
        headers : {"Content-Type": "application/json","X-Master-Key": "$2b$10$fMMTdx56feGpk7c9Uo9Uz.2T9leeiL0RkPh.lA30KaH1I24DNSHkC"},
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta);
        }
    })
}

$("#agregarProducto").submit((e)=>{
    e.preventDefault();
    nuevaInversion();
})

//Este bloque es el que muestra el JSON almacenado en JSONBin.io
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

// Este es el bloque que muestra el listado de productos obtenido del array productos para constatar el push, se imprime en el espacio derecho de la página desde el botón "Mostrar listado de productos "
$("#bListado").one("click", () => mostrarProductos() );
function mostrarProductos () {
    $("#divProductos").prepend(`<h2>Listado actual de productos financieros:</h2>`);
    $("#divProductos").append(productos.forEach(producto => {
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