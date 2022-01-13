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