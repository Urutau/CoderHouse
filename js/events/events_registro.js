let usuarios = [];
let persona1 = {};
let veinte;
let treinta;
let cincuenta;
let datosUsuario;
let rango = "";

let crearUsuario = document.getElementById("crearUsuario");
crearUsuario.onclick = () => nuevoUsuario();

$("#bUsuario").click((e)=>{
    $("#formularioUsuario").slideDown()
                           .fadeOut("slow")
                           .fadeIn("fast", ()=>{
                               $("#bUsuario").slideUp();
                           })
})

let b203050 = document.getElementById("b203050");
b203050.onclick = () => veinte3050();

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let arrow = $("#arrow")[0];
arrow.onmouseover = () => cambiarArrow();

let arrow2 = $("#arrow")[0];
arrow2.onmouseleave = () => cambiarArrow2();

function nuevoUsuario (){
    persona1 = new Usuario(
    nombre = $("#nombre")[0].value,
    anios =  $("#anios")[0].value,
    sueldo = $("#sueldo")[0].value,
    );

    datosUsuario = localStorage.setItem("usuario", JSON.stringify(persona1));
    
    location.reload();
    return persona1;
}

function veinte3050 () {
    veinte = (usuarioParse.sueldo*0.2).toFixed(2);
    treinta = (usuarioParse.sueldo*0.3).toFixed(2);
    cincuenta = (usuarioParse.sueldo*0.5).toFixed(2);

    let parrafo = $("<p></p>");
    parrafo.html(`<p class="veinte3050">Uno de los principios básicos de las finanzas es restar los gastos de los ingresos, lo que da como resultado el <strong>ahorro</strong>, es decir:<br><br>
    ingresos - gastos = ahorro.<br><br>
    Podemos optimizar nuestras finanzas, utilizando la regla 20/30/50:<br><br>
    • Según la regla, el 50% del ingreso debe destinarse a gastos fijos. El alquiler no debe exceder el 25 o 30%. En tu caso, dispondrías de <span style="color: #9642d3;">$${cincuenta}</span> para gastos fijos.<br><br>
    • El 20% debe destinarse al ahorro ¡Y se separa al inicio de mes, no al final! Esto sería pagarte a vos, primero. Ojo, también van acá las deudas contraídas. Serían <span style="color: #9642d3;">$${veinte}</span>.<br><br>
    • Por último, el 30% del ingreso representa los gastos deseados, esto es, los gustos y compras que no son <i>necesarias</i>. En tu caso, podrías destinar <span style="color: #9642d3;">$${treinta}</span>.<br><br>
    Espero que esta información te haya sido de utilidad. Si querés conocer en qué podés invertir esos <span style="color: #9642d3;">$${veinte}</span>, hacé clic en el botón <span style="color: #ffdf32;">PERFIL</span> y descubrí recomendaciones de inversión de acuerdo al resultado del test.</a>
    <hr>
    </p>`);

    $("#nodo203050").append(parrafo).slideDown(2000, ()=>{
        $("#modalRegistro").modal();
    });
}
