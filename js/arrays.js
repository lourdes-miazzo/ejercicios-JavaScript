const areaReferencia = 10000
const volumenReferencia = 1000000
const infoObra = []
const objValorObras= {}
let confirmar
let descContado
let infoDescuento 
const desc = 0.9
let desc20 = 0.8
const cuotas3 = 1.0406
const cuotas6 = 1.0781
const cuotas12 = 1.1473
debugger

//clases

class Obras2d{ 
    constructor(titulo, anio, tecnica, alto, ancho, areaReferencia, precioArea, materiales, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
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
            this.conservacion = 1.03
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
        objValorObras.precio = precioFinal2d
        console.log(objValorObras)
    }
}

class ObrasHoras2d{
    constructor(titulo, anio, tecnica, horaReferencia, horasTrabajadas, materiales, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
        this.horaReferencia = horaReferencia
        this.horasTrabajadas = horasTrabajadas
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
            this.conservacion = 1.03
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
        let precioHoras2d =  this.horaReferencia * this.horasTrabajadas
        let precioFinalHoras2d = ((precioHoras2d * this.materiales) * (this.conservacion * this.seleccion)).toFixed(2)
        alert(`El precio final de la obra es de ${precioFinalHoras2d} pesos`)
        objValorObras.precio = precioFinalHoras2d
        console.log(objValorObras)
    }
}

class Obras3d{
    constructor(titulo, anio, tecnica, alto, ancho, profundidad, volumenReferencia, precioVolumen, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
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
            this.conservacion = 1.03
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
        objValorObras.precio = precioFinal3d
        console.log(objValorObras)
    }
} 

class ObrasHoras3d{
    constructor(titulo, anio, tecnica, horaReferencia, horasTrabajadas, conservacion, seleccion){
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
        this.horaReferencia = horaReferencia
        this.horasTrabajadas = horasTrabajadas
        this.conservacion = conservacion
        this.seleccion = seleccion
    }
    conservacionTiempo(){
        if(this.conservacion === true){
            this.conservacion = 1.03
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
        let precioSimpleHoras3d = this.horaReferencia * this.horasTrabajadas
        let precioFinal3dHoras = ((precioSimpleHoras3d * this.conservacion) * this.seleccion).toFixed(2)
        alert(`El precio final de la obra calculado por horas de trabajo es de ${precioFinal3dHoras} pesos`)
        objValorObras.precio = precioFinal3dHoras
        console.log(objValorObras)
    }
}
//fin de clases

let definirObra = prompt("Bienvenido, elige primero que tipo de obra quieres valuar -(a)pinturas y dibujos 2d. o -(b)esculturas 3d.").toLowerCase()

if(definirObra === "a"){
    let valuar2d = prompt("Cómo quieres valuar tus obras 2d?  -(a)por área creada. o  -(b)por horas trabajadas.").toLowerCase()
//valuar
    //por área
    if(valuar2d === "a"){
        do{
            objObra2d()
            procesarInfoUsuario()
            console.table(infoUsuario)
            confirmar = confirm("Quieres valuar una obra 2d más?")
        } while (confirmar === true)
    //por hora
    }else if (valuar2d === "b") {
        do{
            objObraHoras2d()
            procesarInfoUsuario()
            console.table(infoUsuario)
            confirmar = confirm("Quieres valuar una obra 2d más?")
        } while (confirmar === true)
    }
//medios de pago 2d
    let mediosPago = confirm("Quieres calcular las formas de pago que pueden tener estas obras?")
    if (mediosPago === true){
        let elegirOpcion = prompt("Qué quieres hacer ahora? -(a)calcular un descuento por venta de contado  o  -(b)calcular intereses por venta en cuotas").toLowerCase()
        //descuento
        if (elegirOpcion === "a"){
            //venta()
            descuento()
            console.table(infoDescuento)
        //intereses
        }else if(elegirOpcion === "b"){
            //venta()
            interes()
            console.table(infoInteres)
        }
    }else if (mediosPago === false)
        alert("Gracias por utilizar nuestro valuador de obras!") 
//obra3d
}else if(definirObra === "b"){
    let valuar3d = prompt("Cómo quieres valuar tus obras 3d?  -(a)por volumen creado. o  -(b)por horas trabajadas.").toLowerCase()
    //por area
    if(valuar3d === "a"){
        do{
            objObra3d()
            procesarInfoUsuario()
            console.table(infoUsuario)
            confirmar = confirm("Quieres valuar una obra 3d más?")
        } while (confirmar === true)
    //por hora
    }else if (valuar3d === "b"){
        do{
            objObraHoras3d()
            procesarInfoUsuario()
            console.table(infoUsuario)
            confirmar = confirm("Quieres valuar una obra 3d más?")
        } while (confirmar === true)
    }
//medios pago 3d
    let mediosPago = confirm("Quieres calcular las formas de pago que pueden tener estas obras?")
    if (mediosPago === true){
        let elegirOpcion = prompt("Qué quieres hacer ahora? -(a)calcular un descuento por venta de contado  o  -(b)calcular intereses por venta en cuotas").toLowerCase()
        //descuento
        if (elegirOpcion === "a"){
            descuento()
            console.table(infoDescuento)
        //intereses
        }else if(elegirOpcion === "b"){
            interes()
            console.table(infoInteres)
        }
    }else if (mediosPago === false)
        alert("Gracias por utilizar nuestro valuador de obras!")
}

function objObra2d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let tecnica =prompt("Qué técnica se utilizo para realizarla?")
    let alto = parseFloat(prompt("Cúanto mide en centimetros uno de sus lados?"))
    let ancho = parseFloat(prompt("Cúanto mide en centimetros el otro de sus lados?"))
    let precioArea = parseFloat(prompt("ingresa el precio en pesos de una de tus obras de 100 por 100cms (10000cms2):"))
    let materiales = confirm("Está realizada en óleo? -(Aceptar)Si  -(Cancelar)No")
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra2d = new Obras2d(titulo, anio, tecnica, alto, ancho, areaReferencia, precioArea, materiales, conservacion, seleccion)
    plantillaObra2d.materialesUso()
    plantillaObra2d.conservacionTiempo()
    plantillaObra2d.seleccionConcurso()
    plantillaObra2d.calcPrecio()
    const infoFinalObra2d = Object.assign(plantillaObra2d, objValorObras)
    infoObra.push(infoFinalObra2d)
}

function objObraHoras2d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let tecnica =prompt("Qué técnica se utilizo para realizarla?")
    let horaReferencia = parseFloat(prompt("Ingresa cuanto es el valor de tu hora de trabajo"))
    let horasTrabajadas = parseFloat(prompt("Ingresa la cantidad de horas trabajadas para realizar la obra en su totalidad"))
    let materiales = confirm("Está realizada en óleo? -(Aceptar)Si  -(Cancelar)No")
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra2dH = new ObrasHoras2d(titulo, anio, tecnica, horaReferencia, horasTrabajadas, materiales, conservacion, seleccion)
    plantillaObra2dH.materialesUso()
    plantillaObra2dH.conservacionTiempo()
    plantillaObra2dH.seleccionConcurso()
    plantillaObra2dH.calcPrecio()
    const infoFinalObra2dHoras = Object.assign(plantillaObra2dH, objValorObras)
    infoObra.push(infoFinalObra2dHoras)
}


function objObra3d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let tecnica =prompt("Qué técnica se utilizo para realizarla?")
    let alto = parseFloat(prompt("Cúanto mide en centimetros el alto?"))
    let ancho = parseFloat(prompt("Cúanto mide en centimetros el ancho?"))
    let profundidad =parseFloat(prompt("Cúanto mide en centimetros el espesor?"))
    let precioVolumen = parseFloat(prompt("ingresa el precio en pesos de una de tus obras de 100 por 100 por 100 cms (1000000 cms3):"))
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra3d = new Obras3d(titulo, anio, tecnica,  alto, ancho, profundidad, volumenReferencia, precioVolumen, conservacion, seleccion,)
    plantillaObra3d.conservacionTiempo()
    plantillaObra3d.seleccionSalon()
    plantillaObra3d.calcVolumenPrecio()
    const infoFinalObra3d = Object.assign(plantillaObra3d, objValorObras)
    infoObra.push(infoFinalObra3d)
}

function objObraHoras3d(){
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let tecnica =prompt("Qué técnica se utilizo para realizarla?")
    let horaReferencia = parseFloat(prompt("Ingresa cuanto es el valor de tu hora de trabajo"))
    let horasTrabajadas = parseFloat(prompt("Ingresa la cantidad de horas trabajadas para realizar la obra en su totalidad"))
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra3d = new ObrasHoras3d(titulo, anio, tecnica, horaReferencia, horasTrabajadas, conservacion, seleccion,)
    plantillaObra3d.conservacionTiempo()
    plantillaObra3d.seleccionSalon()
    plantillaObra3d.calcVolumenPrecio()
    const infoFinalObra3dHoras = Object.assign(plantillaObra3d, objValorObras)
    infoObra.push(infoFinalObra3dHoras)
}

function procesarInfoUsuario(){
    infoUsuario = infoObra.map((info) =>{
                                        return{
                                            titulo: info.titulo,
                                            año: info.anio,
                                            tecnica: info.tecnica,
                                            precio: info.precio
                                        }
    })
    
}


function descuento(){
    infoDescuento = infoUsuario.map((descuento) =>{
                                return{
                                    titulo: descuento.titulo,
                                    precio: descuento.precio,
                                    descuento10PorCiento: (descuento.precio * desc).toFixed(2),
                                    descuento20PorCiento: (descuento.precio * desc20).toFixed(2)
                                }
    }) 
}

function interes(){
    infoInteres = infoUsuario.map ((interes)=>{
                                return{
                                    titulo: interes.titulo,
                                    precio: interes.precio,
                                    precio3Cuotas: (interes.precio * cuotas3).toFixed(2),
                                    precio6cuotas: (interes.precio * cuotas6).toFixed(2),
                                    precio12Cuotas: (interes.precio * cuotas12).toFixed(2)
                                }
    })
}