const volumenReferencia = 1000000
let valuar3d = document.getElementById("valuarObra3d")
valuar3d.addEventListener("submit", capturarDatos)

//CAPTURAR LOS VALORES DEL FORMULARIO PARA OBTENER EL PRECIO Y GUARDAR EN LOCAL STORAGE INFO PARA REUTILIZAR EN LA ETAPA DE MOSTRAR AL USUARIO
function capturarDatos(e){
    e.preventDefault()
    const titulo = document.querySelector("#titulo").value
    const anio = document.querySelector("#anio").value
    const tecnica = document.querySelector("#tecnica").value
    const alto = document.querySelector("#alto").value
    const ancho = document.querySelector("#ancho").value
    const profundidad = document.querySelector("#profundidad").value
    const precioVolumen = document.querySelector("#precioVolumen").value
    const fuenteSelectConserv = document.querySelector("#conservacion")
    const conservacion = fuenteSelectConserv.value
    const fuenteSelectSalon = document.querySelector("#seleccion")
    const seleccion = fuenteSelectSalon.value
    const fuenteSelectExpo = document.querySelector("#expo")
    const exposicion = fuenteSelectExpo.value
    const fuenteSelectMedios = document.querySelector("#medios")
    const medios = fuenteSelectMedios.value
     //REALIZAR CALCULO DE PRECIO
    let volObra = parseFloat(alto) * parseFloat(ancho) * parseFloat(profundidad)
    let precioSimple3d = (volObra * parseFloat(precioVolumen)) / volumenReferencia
    let precioFinal3d = ((precioSimple3d * parseFloat(conservacion)) * parseFloat(seleccion) * (parseFloat(exposicion) * parseFloat(medios))).toFixed(2)
    //ENVIAR DATA IMPORTANTE A LOCAL STORAGE
    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("anio", JSON.stringify(anio))
    localStorage.setItem("tecnica", JSON.stringify(tecnica))
    localStorage.setItem("precio", JSON.stringify(precioFinal3d)) 
    //ABRIR NUEVA PANTALLA PARA MOSTRAR LOS RESULTADOS
    window.location ="mostrarResultado.html"
    //ELIMINAR INFO DEL FORMULARIO POR SI EL USUARIO VUELVE HACIA ATRÁS
    valuarObra3d.reset()
}

