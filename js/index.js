//¡Hola! Para este ejercicio, agregué jQuery en los siguientes sitios:
//• archivo events.js: líneas 17, 21, 23, 24, 60, 67, 75, 78, 82.
//• En este mismo archivo (index.js), líneas 136 y 142.
//jQuery es tan práctico y ahorra tanto código que temo olvidar la forma anterior XD. No obstante, creo que hace el código menos legible para los humanos.


//El proyecto es, por ahora, un sitio/aplicación para recomendación de productos financieros, de inversión, de acuerdo al perfil de inversor del usuario.
//1. El usuario podrá ingresar, completar un test de 12 preguntas que determinará su perfil de inversor.
//2. De acuerdo al perfil obtenido, el usuario obtendrá recomendaciones de inversión adecuados a sus preferencias.


//Próximamente:
//Integración de los datos del usuario con los datos del proceso de perfil (edad, perfil de inversor, sueldo, etc)
//Front, presentación de recomendaciones y mecánica de recomendación.
//Separación en secciones, una por HTML (lo intenté y se rompió todo, volví a la página única).

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
        nombre = prompt("¿Nombre del producto financiero?"), 
        duracion = parseInt(prompt("¿Duración en días?")), 
        volatilidad = prompt("¿Volatilidad?\nAlta / Media / Baja"), 
        liquidez = prompt("¿Plazo de liquidez?\nInmediata / 24hs / 48hs / 72hs / A plazo"), 
        beneficio = prompt("¿Coeficiente de beneficio anualizado?")
    );
    productos.push(producto1);

    const otra = prompt("¿Nuevo producto?\n1. Sí 2. No");
    while (otra == 1) {
        nuevaInversion();
    }
}
console.log(productos);

function veinte3050 () {
    veinte = usuarioParse.sueldo*0.2;
    treinta = usuarioParse.sueldo*0.3;
    cincuenta = usuarioParse.sueldo*0.5;

    let parrafo203050 = document.createElement("p");
    parrafo203050.innerHTML = 
        `<p class="veinte3050">Uno de los principios básicos de las finanzas es restar los gastos de los ingresos, lo que da como resultado el <strong>ahorro</strong>, es decir:<br><br>
        ingresos - gastos = ahorro.<br><br>
        Podemos optimizar nuestras finanzas, utilizando la regla 20/30/50:<br><br>
        • Según la regla, el 50% debe destinarse a gastos fijos. El alquiler no debe exceder el 25 o 30%.En tu caso, dispondrías de $${cincuenta} para gastos fijos.<br><br>
        • El 20% debe destinarse al ahorro ¡Y se separa al inicio de mes, no al final! Esto sería pagarte a vos, primero. Ojo, también van acá las deudas contraídas. Serían $${veinte}.<br><br>
        • Por último, el 30% del sueldo representa los gastos deseados, esto es, los gustos y compras que no son <i>necesarias</i>. En tu caso, podrías destinar $${treinta}.<br><br>
        Espero que esta información te haya sido de utilidad. Si querés conocer en qué podés invertir esos $${veinte}, ingresá en <a href="https://www.youtube.com/watch?v=-SgP7vPbenk" target="_blank">este enlace.</a>
        <hr>
        </p>`
    document.getElementsByTagName("article")[0].appendChild(parrafo203050);
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