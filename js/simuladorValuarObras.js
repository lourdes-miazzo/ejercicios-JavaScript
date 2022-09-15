const areaReferencia = 10000
const volumenReferencia = 1000000
let infoObra= []
let confirmar
let descContado
let infoDescuento 
const desc = 0.9
let desc20 = 0.8
const cuotas3 = 1.0406
const cuotas6 = 1.0781
const cuotas12 = 1.1473
let infoObraCompleta
let i = 0

//clase
class Obras{ 
    constructor(tipo, opcionCalculo, titulo, anio, tecnica, alto, ancho, profundidad, areaReferencia, volumenReferencia, precioArea, precioVolumen, horaReferencia, horasTrabajadas, conservacion, seleccion){
        this.tipo = tipo
        this.opcionCalculo = opcionCalculo
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
        this.alto = alto
        this.ancho = ancho
        this.profundidad = profundidad
        this.areaReferencia = areaReferencia
        this.volumenReferencia = volumenReferencia
        this.precioArea = precioArea
        this.precioVolumen = precioVolumen
        this.horaReferencia = horaReferencia
        this.horasTrabajadas = horasTrabajadas
        this.conservacion = conservacion
        this.seleccion = seleccion
    }
    conservacionTiempo(){
        if(this.conservacion === "a"){
            this.conservacion = 1.03
        }
        else if (this.conservacion === "b"){
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
} 


//let empezarProceso = confirm("Bienvenido, quieres comenzar a valuar tus obras? dale Aceptar y completa el formulario")


//if(empezarProceso  == true){
//valuar
        //armar ObJETO
    

     
        
       if(infoObra[i].opcionCalculo === "a" && infoObra[i].tipo === "2d"){
            calcPrecioArea()
        }else if(infoObra[i].opcionCalculo === "a" && infoObra[i].tipo === "3d"){
            calcPrecioVolumen()
        }else if(infoObra[i].opcionCalculo === "b" && (infoObra[i].tipo === "2d" || infoObra[i].tipo === "3d")){
            calcPrecioHoras()
        } 
        procesarInfoUsuario()
//medios de pago 
    let mediosPago = confirm("Quieres calcular las formas de pago que pueden tener estas obras?")
    if (mediosPago === true){
        let elegirOpcion = prompt("Qué quieres hacer ahora? -(a)calcular un descuento por venta de contado  o  -(b)calcular intereses por venta en cuotas").toLowerCase()
        //descuento
        if (elegirOpcion === "a"){
            descuento()
            crearListaDesc(infoDescuento)
        //intereses
        }else if(elegirOpcion === "b"){
            interes()
            crearListaInteres(infoInteres)
        }
    }else if (mediosPago === false)
        alert("Gracias por utilizar nuestro valuador de obras!") 
        crearListaInfo(infoUsuario)
        console.table(infoUsuario)
//}else if(empezarProceso === false){
    //alert("Bueno, la próxima vez será!") 
//}

 
function objObra(){
    tipo
    opcionCalculo
    let titulo = document.querySelector("#titulo").value
    let anio = document.querySelector("#anio").value
    let tecnica = document.querySelector("#tecnica").value
    let alto = document.querySelector("#alto").value
    let ancho = document.querySelector("#ancho").value
    let profundidad = document.querySelector("#profundidad").value
    let precioArea = document.querySelector("#precioArea").value
    let precioVolumen = document.querySelector("#precioVolumen").value
    let horaReferencia = document.querySelector("#horaReferencia").value
    let horasTrabajadas = document.querySelector("#horasTrabajadas").value
    conservacion
    seleccion
    const plantillaObra = new Obras(tipo, opcionCalculo, titulo, anio, tecnica, alto, ancho, profundidad, areaReferencia, volumenReferencia, precioArea, precioVolumen, horaReferencia, horasTrabajadas, conservacion, seleccion)
    plantillaObra.conservacionTiempo()
    plantillaObra.seleccionConcurso()
    infoObra.push(plantillaObra)
}


function calcPrecioArea() {
    let areaObra =  infoObra[i].alto * infoObra[i].ancho
    let precioSimple2d = (infoObra[i].precioArea * areaObra)/ areaReferencia
    let precioFinal2d = ((precioSimple2d) * (infoObra[i].conservacion * infoObra[i].seleccion)).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinal2d} pesos`)
    infoObra[i].precio = precioFinal2d
}

function calcPrecioVolumen(){
    let volObra = infoObra[i].alto * infoObra[i].ancho * infoObra[i].profundidad
    let precioSimple3d = (volObra * infoObra[i].precioVolumen) / volumenReferencia
    let precioFinal3d = ((precioSimple3d * infoObra[i].conservacion) * infoObra[i].seleccion).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinal3d} pesos`)
    infoObra[i].precio = precioFinal3d
}

function calcPrecioHoras(){
    let precioHoras =  infoObra[i].horaReferencia * infoObra[i].horasTrabajadas
    let precioFinalHoras = ((precioHoras) * (infoObra[i].conservacion * infoObra[i].seleccion)).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinalHoras} pesos`)
    infoObra[i].precio = precioFinalHoras
} 

function procesarInfoUsuario(){
    infoUsuario = infoObra.map((info) =>{
                                        return{
                                            tipo: info.tipo,
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
