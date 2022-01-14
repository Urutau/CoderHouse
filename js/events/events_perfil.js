let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let arrow = $("#arrow")[0];
// document.getElementById("arrow");
arrow.onmouseover = () => cambiarArrow();

let arrow2 = $("#arrow")[0];
arrow2.onmouseleave = () => cambiarArrow2();

$("#formulario").on("submit", submit);

function submit (e) {
    e.preventDefault();
    let preguntas = $(".pregunta");
    for (pregunta of preguntas) {
        pregunta.checked ? acumulativo += parseInt(pregunta.value) : acumulativo += 0; 
    }
    //limpia el formulario
    document.getElementById("formulario").reset();
    perfilDeInversor(acumulativo);
    $("#cuestionario").append(`<p class="perfil" id="perfil">Tu perfil de inversión es:\n${perfil}</p>`);
    $("#formulario").slideUp(2000, ()=>{
        $("#cuestionario").append(`<button class="buttonEnviar" id="bRecomendacion">Recomendaciones según tu perfil de inversor</button>`);
        $("#bRecomendacion").animate({
            width: "100%",
        }, 2000);
    })
}