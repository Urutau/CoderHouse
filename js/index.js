const URLGET2 = "productos.JSON";
let usuarioParse = JSON.parse(localStorage.getItem("usuario"));
let productos = [
    {
        id: 3,
        nombre: "Plazo fijo Banco Ciudad",
        duracion: 365,
        volatilidad: "Baja",
        liquidez: "A plazo",
        beneficio: 0.39
    },
    {
        id: 4,
        nombre: "Plazo fijo Banco Macro",
        duracion: 365,
        volatilidad: "Baja",
        liquidez: "A plazo",
        beneficio: 0.37
    },
    {
        id: 1,
        nombre: "FCI Retorno Total",
        duracion: 365,
        volatilidad: "Media",
        liquidez: "48hs",
        beneficio: 0.54
    },
    {
        id: 6,
        nombre: "$SPY CEDEAR",
        duracion: 365,
        volatilidad: "Media",
        liquidez: "48hs",
        beneficio: 0.55
    },
    {
        id: 2,
        nombre: "FCI Acciones Argentinas",
        duracion: 365,
        volatilidad: "Alta",
        liquidez: "72hs",
        beneficio: 0.60
    },
    {
        id: 5,
        nombre: "Bitcoin ($BTC)",
        duracion: 365,
        volatilidad: "Alta",
        liquidez: "Inmediata",
        beneficio: 0.37
    },
    {
        id: 7,
        nombre: "DAI (stablecoin)",
        duracion: 365,
        volatilidad: "Media",
        liquidez: "Inmediata",
        beneficio: 0.18
    }
]

let producto1 = {};

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

function cambiarArrow () {
    let flecha = $("#arrow")[0];
    flecha.src = "./images/ladybug.png";
}

function cambiarArrow2 () {
    let flecha2 = $("#arrow")[0];
    flecha2.src = "./images/arrow_r.png";
}