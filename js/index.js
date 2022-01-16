const URLGET = "productos.JSON";
let usuarios = [];
let persona1 = {};
let productos = [
    {
        nombre: "Plazo fijo 30 días",
        duracion: 30,
        volatilidad: "Baja",
        liquidez: "Nula",
        beneficio: 1.37
    },
    {
        nombre: "FCI Retorno Total",
        duracion: 365,
        volatilidad: "Media",
        liquidez: "48hs",
        beneficio: 1.54
    },
    {
        nombre: "FCI Acciones Argentinas",
        duracion: 365,
        volatilidad: "Alta",
        liquidez: "72hs",
        beneficio: 1.60
    }
]

let producto1 = {};
let veinte;
let treinta;
let cincuenta;
const filtroDeVolatilidad = productos.filter(producto => producto.volatilidad == "Baja");
console.log(filtroDeVolatilidad);

let acumulativo = 0;
let perfil = "";
let rango = "";
let datosUsuario;
let usuarioParse = JSON.parse(localStorage.getItem("usuario"));

function nuevoUsuario (){
    persona1 = new Usuario(
    nombre = $("#nombre")[0].value,
    anios =  $("#anios")[0].value,
    sueldo = $("#sueldo")[0].value,
    );

    datosUsuario = localStorage.setItem("usuario", JSON.stringify(persona1));
    console.log(localStorage.getItem("usuario"));
    
    location.reload();
    return persona1;
}

function nuevaInversion () {
        producto1 = new Inversion(
        nombre = $("#nombreprod")[0].value, 
        duracion = $("#duracion")[0].value, 
        volatilidad = $("#volatilidad")[0].value, 
        liquidez = $("#liquidez")[0].value, 
        beneficio = $("#beneficio")[0].value
    );
    productos.push(producto1);
}
console.log(productos);

function veinte3050 () {
    veinte = usuarioParse.sueldo*0.2;
    treinta = usuarioParse.sueldo*0.3;
    cincuenta = usuarioParse.sueldo*0.5;

    let parrafo = $("<p></p>");
    parrafo.html(`<p class="veinte3050">Uno de los principios básicos de las finanzas es restar los gastos de los ingresos, lo que da como resultado el <strong>ahorro</strong>, es decir:<br><br>
    ingresos - gastos = ahorro.<br><br>
    Podemos optimizar nuestras finanzas, utilizando la regla 20/30/50:<br><br>
    • Según la regla, el 50% debe destinarse a gastos fijos. El alquiler no debe exceder el 25 o 30%.En tu caso, dispondrías de $${cincuenta} para gastos fijos.<br><br>
    • El 20% debe destinarse al ahorro ¡Y se separa al inicio de mes, no al final! Esto sería pagarte a vos, primero. Ojo, también van acá las deudas contraídas. Serían $${veinte}.<br><br>
    • Por último, el 30% del sueldo representa los gastos deseados, esto es, los gustos y compras que no son <i>necesarias</i>. En tu caso, podrías destinar $${treinta}.<br><br>
    Espero que esta información te haya sido de utilidad. Si querés conocer en qué podés invertir esos $${veinte}, ingresá en <a href="https://www.youtube.com/watch?v=-SgP7vPbenk" target="_blank">este enlace.</a>
    <hr>
    </p>`);

    $("#nodo203050").append(parrafo).slideDown(2000, ()=>{
        alert("¡Genial! ¿Querés conocer más sobre tu perfil? Hacé click en PERFIL.");
    });
}

function hola (){
    if (localStorage.getItem("usuario") != null) {
        let hola = document.createElement("h1");
        hola.innerHTML = `<h1>¡Hola, ${usuarioParse.nombre}!</h1>`
        document.getElementsByTagName("header")[0].appendChild(hola);
    } else {
        let hola1 = document.createElement("h1");
        hola1.innerHTML = `<h1>¡Hola, Usuario!</h1>`
        document.getElementsByTagName("header")[0].appendChild(hola1);
    }
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

function cambiarArrow () {
    let flecha = $("#arrow")[0];
    // document.getElementById("arrow");
    flecha.src = "./images/ladybug.png";
}

function cambiarArrow2 () {
    let flecha2 = $("#arrow")[0];
    // document.getElementById("arrow");    
    flecha2.src = "./images/arrow_r.png";
}