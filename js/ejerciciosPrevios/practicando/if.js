let nombre = prompt("Hola, ¿cual es tu nombre?");
let nombre2;
if (nombre === "") {
    nombre2 = prompt("es necesario que me digas tu nombre");
    alert("Bienvenido " + nombre2 + " a la Universidad Nacional.");
} else {
    alert("Bienvenido " + nombre + " a la Universidad Nacional.");
} 

let anio = prompt("¿En que año naciste?");
let edad = 2022 - parseInt(anio);
let curso = confirm("¿Terminaste el secundario? Aceptar: si  Cancelar: no");
let nacion = confirm("¿Eres Argentino? Aceptar: si  Cancelar: no");

if ((edad >= 25 || curso === true) && (nacion === true)) {
    alert("Puedes ingresar para ver todas las carreras e inscribirte en ellas.")
} else if ((edad <= 24 && curso ===false) && (nacion === true)) {;
    alert("Puedes ingresar para ver los cursos vocacionales.");
} else if((nacion === false) && (edad >= 25 || curso === true)) {
    alert("Es necesario que realices los trámites de validación de estadía y certificados de estudios, para luego inscribirte en las carreras.");
} else if((nacion === false) && (edad <= 24 && curso === false)){
    alert("Puedes inscribirte a cursos de extensión despues de validar tu estadía.");
}