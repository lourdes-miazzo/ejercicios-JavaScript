alert("Bienvenido, primero elige que accion quieres realizar:");
let seleccionAccion = prompt("-(a)Valuar tus obras o -(b)Calcular descuentos o intereses al vender tu obra.").toLowerCase();


if(seleccionAccion === "a"){
    let metodoValuar = prompt("Puedes valuar tus obras de 3 maneras:-(a)Por área -(b)Por hora de trabajo  -(c)Por porcentaje de materiales gastados").toLowerCase();
    let numRepet = parseInt(prompt("Ingresa el número de obras que quieres valuar:")); 

    let area = 10000;

    if (metodoValuar === "a"){
        let precioPesos = parseFloat(prompt("ingresa el precio en pesos de una de tus obras de 100 por 100cms (10000cms2):"));
        for (i = 1; i <= numRepet; i++ ){
            let ladoA = parseFloat(prompt("ingresa la medida en cms de uno de los lados:"));
            let ladoB = parseFloat(prompt("ingresa la medida en cms de otro de los lados:"));
        valuarArea(precioPesos, ladoA, ladoB);
        }
    }else if (metodoValuar === "b"){
        let valHora = parseFloat(prompt("ingresa el valor que tiene cada hora de tu trabajo:"));
        for (i = 1; i <= numRepet; i++ ){
            let trabHorasTotal = parseFloat(prompt("ingresa el total de horas que trabajaste para terminar la obra:"));
            horaTrabajo (valHora, trabHorasTotal);
        }
    }else if (metodoValuar === "c"){
        for (i = 1; i <= numRepet; i++ ){
            let gastosMateriales = parseFloat(prompt("ingresa el total de lo gastado en materiales para realizar la obra:"));
            let porcentajeExtra = parseFloat(prompt("ingresa el porcentaje extra que quieres ganar sobre el gasto total de materiales ej(30):"));
            materialesMasPorcentaje(gastosMateriales, porcentajeExtra);
        }
    }

    function valuarArea (pesos, lado1, lado2){
            let areaResultado = lado1 * lado2;
            let valorArea =((areaResultado * pesos) / area).toFixed(2);
            alert("El valor de la obra según el área de la misma, es de " + valorArea + " pesos.");
    }

    function horaTrabajo (precioHora, horasTrabajadas){
        let valorHoras =( precioHora * horasTrabajadas).toFixed(2);
        alert("El valor de la obra teniendo en cuenta las horas trabajadas es de " + valorHoras + " pesos.");
    }

    function materialesMasPorcentaje(totalMaterial, extraPorCiento){
        let totalPorcentaje = (totalMaterial * extraPorCiento) / 100;
        let valorFinalPorcentaje = (totalMaterial + totalPorcentaje).toFixed(2);
        alert("El valor de la obra con el porcentaje sumado es de " + valorFinalPorcentaje + " pesos");
    }


}else if (seleccionAccion === "b"){
    alert("Ahora elige que deseas realizar, recuerda que cuando las obras se pagan en efectivo suelen tener un pequeño descuento, y si se venden en cuotas pueden agregarse intereses");
    let descInte= prompt("Puedes -(a)Calcular un descuento o -(b)Agregar intereses para vender en cuotas").toLowerCase();

    let numRepet = parseInt(prompt("Ingresa el número de obras que quieres valuar:")); 

    if (descInte === "a"){
        for (i = 1; i <= numRepet; i++ ){
            let pObra = parseFloat(prompt("Ingresa el precio de la obra:"));
            let pDescuento = parseFloat(prompt("ingresa el número de descuento que quieres realizar sobre la misma:"));
            descuento(pObra, pDescuento);
        }
    }else if(descInte === "b"){
        for(i = 1; i <= numRepet; i++ ){
            let pObra = parseFloat(prompt("Ingresa el precio de la obra:"));
            let interes = parseFloat(prompt("Ingresa el interés que quieres suamarle al precio de la obra al venderla en cuotas:"));
            let cuotas = parseFloat(prompt("Ingresa la cantidad de cuotas en que quieres vender tu obra"));
            interesExtra (pObra, interes, cuotas)
        }
    }

function descuento(precioObra, valorDesc){
    let descSobreObra = (precioObra * valorDesc) / 100;
    let descVentaUnaCouta =( precioObra - descSobreObra).toFixed(2);
    alert("Tu obra con el descuento vale " + descVentaUnaCouta + " pesos.");
}

function interesExtra(valorObra, porcExtra, cantCuotas){
    let interes = (valorObra * porcExtra)/ 100;
    let valorFinal = interes + valorObra;
    let precioCuotaIndividual = (valorFinal / cantCuotas).toFixed(2);
    alert("el precio de cada cuota es de " + precioCuotaIndividual + " pesos.");
}
}