let nombre = prompt("¿Hola, cuál es tu nombre?");

let numRepet = parseInt(prompt("Hola " + nombre + " ingresa el número de pinceles que quieres comprar:"));

let sumatoria = 0;
let desc = 15;
let descCuenta = 100 - desc;
let desc2 = 25;
let descCuenta2 = 100 - desc2;
let desc3 = 35;
let descCuenta3 = 100 - desc3;


for (let i = 1; i <= numRepet; i++){
    let precioIndiv = parseFloat(prompt("Y ahora ingresa el precio de cada pincel, sin el signo $, de uno por vez (recuerda que los centavos se expresan luego de un punto, ej 23.50"));
    sumatoria = sumatoria + precioIndiv;
    console.log("la suma de sus productos hasta ahora es de: " + sumatoria + " pesos");
}

if (sumatoria <= 500){
    alert("El total a abonar es "+ sumatoria);
} else if (sumatoria <= 1000){
    let precioDesc = (sumatoria * descCuenta) / 100;
    alert("su compra recibe un descuento del " + desc + " % por lo tanto el valor a abonar es de: " + precioDesc.toFixed(2));
} else if (sumatoria <= 2500){
    let precioDesc2 = (sumatoria * descCuenta2) / 100;
    alert("su compra recibe un descuento del " + desc2 + " % por lo tanto el valor a abonar es de: " + precioDesc2.toFixed(2));
} else{
    let precioDesc3 = (sumatoria * descCuenta3) / 100;
    alert("su compra recibe un descuento del " + desc3 + " % por lo tanto el valor a abonar es de: " + precioDesc3.toFixed(2));
}





