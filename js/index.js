//El proyecto es, por ahora, un sitio/aplicación para recomendación de productos financieros, de inversión, de acuerdo al perfil de inversor del usuario.
//1. El usuario podrá ingresar, completar un test de 12 preguntas que determinará su perfil de inversor.
//2. De acuerdo al perfil obtenido, el usuario obtendrá recomendaciones de inversión adecuados a sus preferencias.

//NOVEDADES:
//Para cumplir con la consigna, imprimo dentro de un div el listado actual de productos financieros, que está en el array [productos], mediante un evento
//asignado al botón Mostrar listado de productos, también creado para la consigna.

//Próximamente:
//Integración de los datos del usuario con los datos del proceso de perfil (edad, perfil de inversor, sueldo, etc)
//Front, formulario para el cuestionario, presentación de recomendaciones y mecánica de recomendación.

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

// const puntajes = [[4, 3, 2, 1], [1, 2, 3, 4], [4, 3], [2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [2, 3, 4], [1, 2, 3, 4],];

let respuestas = [];
let acumulativo = 0;
let perfil = "";
let rango = "";
let datosUsuario;
let usuarioParse = JSON.parse(localStorage.getItem("usuario"));

function nuevoUsuario (){
    persona1 = new Usuario(
    nombre = prompt("¿Cuál es tu nombre?"),
    anios =  prompt("¿Cuál es tu edad?"),
    sueldo = prompt("¿Cuál es tu sueldo en pesos?"),
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
    document.body.appendChild(parrafo203050);
}

function hola (){
    if (localStorage.getItem("usuario") != null) {
        let hola = document.createElement("h1");
        hola.innerHTML = `<h1>¡Hola, ${usuarioParse.nombre}!</h1>`
        document.body.appendChild(hola);
    } else {
        let hola1 = document.createElement("h1");
        hola1.innerHTML = `<h1>¡Hola, Usuario!</h1>`
        document.body.appendChild(hola1);
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

function test (acumulativo) {
    perfilDeInversor(acumulativo);
    console.log(perfil);
    let parrafoPerfil = document.createElement("p");
    parrafoPerfil.innerHTML = `<p class="perfil">Tu perfil de inversión es:\n${perfil}</p>`
    document.body.appendChild(parrafoPerfil);
}

function cambiarArrow () {
    let flecha = document.getElementById("arrow");
    flecha.src = "./images/ladybug.png";
}

function cambiarArrow2 () {
    let flecha2 = document.getElementById("arrow");
    flecha2.src = "./images/arrow_r.png";
}