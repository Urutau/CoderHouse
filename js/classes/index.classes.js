class Usuario {
    constructor (nombre, anios, sueldo) {
        this.nombre = nombre,
        this.anios = anios,
        this.sueldo = sueldo,
        this.edad = function () {
            if (anios < 18) {
                rango = "Lamentablemente, sos menor de edad y no estás habilitado para invertir todavía ¡Te esperamos cuando cumplas 18! ;)";
            } else if (anios >= 18 && anios < 30) {
                rango = "Joven";
            } else if (anios >=30 && anios < 60) {
                rango = "Adulto";
            } else if (anios >= 60) {
                rango = "Adulto Mayor";
            }
            return rango;
        }
    }
}

class Inversion {
    constructor (id, nombre, duracion, volatilidad, liquidez, beneficio) {
        this.id = id,
        this.nombre = nombre,
        this.duracion = duracion,
        this.volatilidad = volatilidad,
        this.liquidez = liquidez,
        this.beneficio = beneficio
    }
}