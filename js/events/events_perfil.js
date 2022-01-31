let acumulativo = 0;
let perfil = "";
let sugerencia = [];
let arrayProductosJSON = [];

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let arrow = $("#arrow")[0];
arrow.onmouseover = () => cambiarArrow();

let arrow2 = $("#arrow")[0];
arrow2.onmouseleave = () => cambiarArrow2();

//BOTON PARA OBTENER PERFIL
$("#formulario").on("submit", submit);

function submit (e) {
    e.preventDefault();
    
    //Esta función trae el listado de productos del JSON local
    productosJSON()

    calcularPuntaje();
    
    //limpia el formulario
    document.getElementById("formulario").reset();
    perfilDeInversor(acumulativo);
    informarPerfil();
    informarRecomendacion();
}

function calcularPuntaje() {
    let preguntas = $(".pregunta");
    for (pregunta of preguntas) {
        pregunta.checked ? acumulativo += parseInt(pregunta.value) : acumulativo += 0;
    }
    return acumulativo
}

function perfilDeInversor (acumulativo) {
    
    if (acumulativo <= 23){
        perfil = "Conservador";
    } else if (acumulativo <= 30){
        perfil = "Moderadamente Conservador";
    } else if (acumulativo <= 37){
        perfil = "Moderado";
    } else if (acumulativo <= 42){
        perfil = "Moderadamente Agresivo";
    } else if (acumulativo <= 48){
        perfil = "Agresivo";
    } else {
        perfil = "El resultado no coincide con un perfil definido. Volvé a hacer el test o comunicate con nosotros por la sección Contacto.";
    }
    return perfil;
}

function filtro () {

    if (perfil === "Conservador") {
        sugerencia = arrayProductosJSON.filter( producto => producto.volatilidad == "Baja")
    } else if (perfil === "Moderadamente Conservador") {
        sugerencia = arrayProductosJSON.filter( producto => (producto.volatilidad == "Baja" || producto.volatilidad == "Media"))
    } else if (perfil === "Moderado") {
        sugerencia = arrayProductosJSON.filter( producto => producto.volatilidad == "Media")
    } else if (perfil === "Moderadamente Agresivo") {
        sugerencia = arrayProductosJSON.filter( producto => (producto.volatilidad == "Alta" || producto.volatilidad == "Media"))
    } else if (perfil === "Agresivo") {
        sugerencia = arrayProductosJSON.filter( producto => producto.volatilidad == "Alta")
        console.log("sugerencia", sugerencia);
    } else {
        console.log ("Error, valor no reconocido.");
    }
    
    mostrarFiltro();
}

function mostrarFiltro () {
    $("#sugerencia").append(sugerencia.forEach( s => {
        $("#sugerencia").append(`<p class="tarjeta">
        Inversión: ${s.nombre}<br><br>
        Volatilidad: ${s.volatilidad}<br><br>
        Rendimiento cada $100: $${(s.beneficio*100).toFixed(2)}<br><br>
        </p>`)
    }));
}

const productosJSON = () => {
    $.getJSON (URLGET2, (respuesta, estado) => {
        if (estado === "success") {
            arrayProductosJSON = respuesta;
        }
    })
    return arrayProductosJSON
}

function informarPerfil() {
    $("#cuestionario").append(`<p class="perfil" id="perfil">Tu perfil de inversión es:\n${perfil}</p>`);
}

function informarRecomendacion () {
    $("#formulario").slideUp(2000, ()=>{
        $("#cuestionario").append(`<button class="buttonEnviar" id="bRecomendacion">Recomendaciones según tu perfil de inversor</button>`);
        $("#bRecomendacion").animate({
            width: "100%",
        }, 2000).on("click", () => {
            filtro();
        })
    })
}