const areaReferencia = 10000
const volumenReferencia = 1000000
const arrayObras2d= []
const arrayObras3d= []

class Obras2d{ 
    constructor(titulo, anio, alto, ancho, areaReferencia, precioArea, materiales, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.alto = alto
        this.ancho = ancho
        this.areaReferencia = areaReferencia
        this.precioArea = precioArea
        this.materiales = materiales
        this.conservacion = conservacion
        this.seleccion = seleccion
    }
    materialesUso(){
        if (this.materiales === true){
            this.materiales = 1.2
        }
        else{
            this.materiales = 1
        }
    }
    conservacionTiempo(){
        if(this.conservacion === true){
            this.conservacion = 1.05
        }
        else{
            this.conservacion = 0.8
        }
    }
    seleccionConcurso(){
        if (this.seleccion === "a"){
            this.seleccion = 1.3
        }else if (this.seleccion === "b"){
            this.seleccion = 1.2
        } else if (this.seleccion === "c"){
            this.seleccion = 1.1
        } else if (this.seleccion === "d"){
            this.seleccion = 1
        }
    }
    calcPrecio(){
        let areaObra =  this.alto * this.ancho
        let precioSimple2d = (this.precioArea * areaObra)/ areaReferencia
        let precioFinal2d = ((precioSimple2d * this.materiales) * (this.conservacion * this.seleccion)).toFixed(2)
        alert(`El precio final de la obra es de ${precioFinal2d} pesos`)
        arrayObras2d.push(precioFinal2d)
        console.table(arrayObras2d)
    }
}

class Obras3d{
    constructor(titulo, anio, alto, ancho, profundidad, volumenReferencia, precioVolumen, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.alto = alto
        this.ancho = ancho
        this.profundidad = profundidad
        this.volumenReferencia = volumenReferencia
        this.precioVolumen = precioVolumen
        this.conservacion = conservacion
        this.seleccion = seleccion
    }
    conservacionTiempo(){
        if(this.conservacion === true){
            this.conservacion = 1.05
        }
        else{
            this.conservacion = 0.8
        }
    }
    seleccionSalon(){
        if (this.seleccion === "a"){
            this.seleccion = 1.3
        }else if (this.seleccion === "b"){
            this.seleccion = 1.2
        } else if (this.seleccion === "c"){
            this.seleccion = 1.1
        } else if (this.seleccion === "d"){
            this.seleccion =  1
        }
    }
    calcVolumenPrecio(){
        let volObra = this.alto * this.ancho * this.profundidad
        let precioSimple3d = (volObra * this.precioVolumen) / volumenReferencia
        let precioFinal3d = ((precioSimple3d * this.conservacion) * this.seleccion).toFixed(2)
        alert(`El precio final de la obra es de ${precioFinal3d} pesos`)
        arrayObras3d.push(precioFinal3d)
        console.table(arrayObras3d)
    }
}   

let definirObra = prompt("Bienvenido, elige primero que tipo de obra quieres valuar -(a)pinturas y dibujos 2d. o -(b)esculturas 3d.").toLowerCase()

if(definirObra === "a"){
    let cantVueltas = parseInt(prompt("ingresa la cantidad deobras que quieres valuar"))
    for(let i = 1; i <= cantVueltas; i++){
        objObra2d()
    }
}else if (definirObra === "b"){
    let cantVueltas = parseInt(prompt("ingresa la cantidad deobras que quieres valuar"))
    for(let i = 1; i <= cantVueltas; i++){
        objObra3d()
    }    
}


function objObra2d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let alto = parseFloat(prompt("Cúanto mide en centimetros uno de sus lados?"))
    let ancho = parseFloat(prompt("Cúanto mide en centimetros el otro de sus lados?"))
    let precioArea = parseFloat(prompt("ingresa el precio en pesos de una de tus obras de 100 por 100cms (10000cms2):"))
    let materiales = confirm("Está realizada en óleo? -(Aceptar)Si  -(Cancelar)No")
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra2d = new Obras2d(titulo, anio, alto, ancho, areaReferencia, precioArea, materiales, conservacion, seleccion)
    plantillaObra2d.materialesUso()
    plantillaObra2d.conservacionTiempo()
    plantillaObra2d.seleccionConcurso()
    plantillaObra2d.calcPrecio()
}

function objObra3d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let alto = parseFloat(prompt("Cúanto mide en centimetros el alto?"))
    let ancho = parseFloat(prompt("Cúanto mide en centimetros el ancho?"))
    let profundidad =parseFloat(prompt("Cúanto mide en centimetros el espesor?"))
    let precioVolumen = parseFloat(prompt("ingresa el precio en pesos de una de tus obras de 100 por 100 por 100 cms (1000000 cms3):"))
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra3d = new Obras3d(titulo, anio, alto, ancho, profundidad, volumenReferencia, precioVolumen, conservacion, seleccion)
    plantillaObra3d.conservacionTiempo()
    plantillaObra3d.seleccionSalon()
    plantillaObra3d.calcVolumenPrecio()
}

