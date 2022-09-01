debugger
let nombre = prompt("Contame tu nombre");

alert("Hola " + nombre + " bienvenid@ al sitio web de Bacardi");

let anio = prompt("Contame en que año naciste");
let edad = 2022 - anio;

if (edad >= 18) {
    alert("Bienvenid@ " + nombre + " al sabor del mejor ron");
} else if (edad < 18){
    alert("Lo sentimos " + nombre + " no puedes ingresar a esta pagina");
}

