//El proyecto es, por ahora, un sitio/aplicación para recomendación de productos financieros, de inversión, de acuerdo al perfil de inversor del usuario.
//1. El usuario podrá ingresar, completar un test de 12 preguntas que determinará su perfil de inversor.
//2. De acuerdo al perfil obtenido, el usuario obtendrá recomendaciones de inversión adecuados a sus preferencias.

//NOVEDADES:
//Para cumplir con la consigna, se imprime el resultado del test en la página y el resultado de 20/30/50. No obstante, estuve acomodando otras cosas.

//1. Sumé cuatro botones a la página:
//creación de usuario
//obtención de perfil (con la función test() que llama a cuestionario(), sumatoria() y perfilDeInversor() e imprime resultado.
//la distribución financiera del sueldo (veinte3050()) quedó como acción independiente del test, e imprime resultado.
//limpiar Local Storage y recargar página.
//2. Hay cambios en el método edad() de la clase Usuario, ahora devuelve el rango etario por la variable rango.
//3. El encabezado (hola()) carga el nombre del usuario. Si no hay usuario en Local Storage, carga "Usuario". Para eso puse un reload en la creación del usuario y en el botón para limpiar el Local Storage.

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

//Estos son los puntajes de cada respuesta, hay un array por pregunta, un puntaje para cada respuesta
const puntajes = [[4, 3, 2, 1], [1, 2, 3, 4], [4, 3], [2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [2, 3, 4], [1, 2, 3, 4],];

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
    //Probando cómo funciona el método
    persona1.edad();
    console.log(rango);

    //El usuario se guarda en Local Storage (console.log para monitoreo)
    datosUsuario = localStorage.setItem("usuario", JSON.stringify(persona1));
    console.log(localStorage.getItem("usuario"));
    
    //Recarga la página para actualizar el encabezado
    location.reload();
    // usuarios.push(persona1);
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

//La función [cuestionario] reúne las opciones del usuario en el array [respuestas].
//Más adelante, este cuestionario se podría transferir a un formulario, para hacer más simple su compleción.
function cuestionario () {
    let pregunta1 = parseInt(prompt("Su edad se encuentra dentro del rango de:\n1) Menos de 25 Años.\n2) De 25 a 35 Años.\n3) De 36 a 55 Años.\n4) De 56 Años o más."));
    respuestas.push(pregunta1);
    let pregunta2 = parseInt(prompt("2. ¿Cuanto conoce del Mercado de Capitales?\n1) Nada.\n2) Un poco.\n3) Bastante.\n4) Soy profesional en finanzas."));
    respuestas.push(pregunta2);
    let pregunta3 = parseInt(prompt("3. ¿Ha realizado alguna vez una inversión en el Mercado de Capitales?\n1) Si.\n2) No."));
    respuestas.push(pregunta3);
    let pregunta4 = parseInt(prompt("4. ¿Cuenta con alguna reserva para cubrir un imprevisto?\n1) No o es muy pequeña.\n2) Si, representa más o menos 5 meses de mis ingresos.\n3) Si, es una cantidad significativa."));
    respuestas.push(pregunta4);
    let pregunta5 = parseInt(prompt("5. ¿Que porcentaje de sus ahorros esta dispuesto a destinar a las inversiones en el mercado de capitales?\n1) Menos del 25%.\n2) Entre el 25% y el 40%.\n3) Entre el 41% y el 65%.\n4) Mas del 65%."));
    respuestas.push(pregunta5);
    let pregunta6 = parseInt(prompt("6. ¿Cuál sería la canasta de inversiones que más lo identifica?\n1) 100% en activos de renta fija a corto plazo y con mucha liquidez.\n2) 60% en activos de renta fija altamente líquidos a corto plazo y 40% en activos de renta variable de mediano plazo.\n3) 40% en activos de renta fija altamente líquidos a corto plazo y 60% en activos de renta variable a largo plazo.\n4) 100% en activos de renta variable a largo plazo."));
    respuestas.push(pregunta6);
    let pregunta7 = parseInt(prompt("7. ¿Cuál es el plazo máximo que usted estaría dispuesto a mantener sus inversiones en el mercado de capitales?\n1) Menos de cuatro meses.\n2) Entre cuatro y doce meses.\n3) Más de doce meses."));
    respuestas.push(pregunta7);
    let pregunta8 = parseInt(prompt("8. Seleccione de las siguientes afirmaciones cuál identifica mejor su actitud hacia las inversiones:\n1) No estaría dispuesto a realizar ninguna inversión que implicara arriesgar mi capital.\n2) Aceptaría un mínimo riesgo si con ello puedo obtener una mayor rentabilidad.\n3) Estaría dispuesto a asumir una pérdida del 10% si espero tener a mediano / largo plazo una mayor rentabilidad.\n4) Acepto asumir un alto riesgo para obtener una mayor rentabilidad."));
    respuestas.push(pregunta8);
    let pregunta9 = parseInt(prompt("9. Ante una baja importante en su portfolio de inversiones, usted:\n1) Recuperaría el total de mis activos.\n2) Rescataría una parte de mis activos.\n3) Mantendría la totalidad de mis activos esperando una suba.\n4) Adicionaría mas capital esperando comprar barato."));
    respuestas.push(pregunta9);
    let pregunta10 = parseInt(prompt("10. Si usted tuviera que contratar un seguro para auto, optaría por:\n1) Póliza contra todo riesgo, sin importar que sea la más cara.\n2) Póliza únicamente de seguro contra terceros.\n3) La póliza más barata, aunque su cobertura sea muy pobre.\n4) No contrato ninguna póliza."));
    respuestas.push(pregunta10);
    let pregunta11 = parseInt(prompt("11. En el momento de realizar una inversión, cual de las siguientes opciones prefiere?:\n1) Preservar el dinero que se invirtió con una rentabilidad mínima.\n2) Tener una ganancia apenas superior a la de un plazo fijo, aunque este sujeta a una variación mínima del mercado.\n3) Obtener una ganancia significativa, corriendo el riesgo de perder más de la mitad de la inversión inicial."));
    respuestas.push(pregunta11);
    let pregunta12 = parseInt(prompt("12. Usted estaría dispuesto a asumir una baja en el valor de sus activos:\n1) No estoy dispuesto aceptar ninguna pérdida.\n2) Máximo del 10%.\n3) Entre 11% y 25%.\n4) Más de 26%."));
    respuestas.push(pregunta12);
}

//Esta es la función que calcula el puntaje obtenido luego del cuestionario, recorriendo el array [puntajes]. Dos días de trabajo para que funcione bien.
//El puntaje se devuelve en la variable [acumulativo].
function sumatoria () {
    for (var i = 0; i < respuestas.length; i++){
        let posicionPuntaje = respuestas[i];
        let sumando = puntajes[i][posicionPuntaje-1];
        acumulativo += sumando;
    }
    return parseInt(acumulativo);
}

//Esta es la función que devuelve el perfil:
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

//Esta función llama a tres anteriores para el botón "Obtener perfil" e imprime un cuadro de texto en la página. Los console.log son para monitoreo.
function test () {
    cuestionario();
    console.log(respuestas);
    sumatoria();
    console.log(puntajes);
    perfilDeInversor(acumulativo);
    console.log(perfil);
    let parrafoPerfil = document.createElement("p");
    parrafoPerfil.innerHTML = `<p class="perfil">Tu perfil de inversión es:\n${perfil}</p>`
    document.body.appendChild(parrafoPerfil);
}

//Esta es medio rara. La idea era que el if evaluara si hay usuario cargado en Local Storage, pero no lo pude hacer funcionar [if (localStorage.getItem("usuario")!="")]
//Por eso, opté por hacer que evalúe si se cargó un nombre de usuario ¯\_(ツ)_/¯
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

function limpiar () {
    localStorage.clear();
    location.reload();
}

//Llamadas:
// nuevaInversion();