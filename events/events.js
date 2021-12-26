
let bUsuario = document.getElementById("bUsuario");
bUsuario.onclick = () => nuevoUsuario(); 

let bTest = document.getElementById("bTest");
bTest.onclick = () => test();

let b203050 = document.getElementById("b203050");
b203050.onclick = () => veinte3050();

let bLimpiar = document.getElementById("bLimpiar");
bLimpiar.onclick = () => {
    localStorage.clear();
    location.reload();
}

let bNuevaInversion = document.getElementById("bNuevaInversion");
bNuevaInversion.onclick = () => nuevaInversion();

let arrow = document.getElementById("arrow");
arrow.onmouseover = () => cambiarArrow();

let arrow2 = document.getElementById("arrow");
 arrow2.onmouseleave = () => cambiarArrow2();