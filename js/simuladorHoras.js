let valuarObraHoras = document.querySelector("#valuarObraHoras")
valuarObraHoras.addEventListener("submit", capturarDatos)

function capturarDatos(e){
    e.preventDefault()
    const titulo = document.querySelector("#titulo").value
    const anio = document.querySelector("#anio").value
    const tecnica = document.querySelector("#tecnica").value
    const horaReferencia = document.querySelector("#horaReferencia").value
    const horasTrabajadas = document.querySelector("#horasTrabajadas").value
    const fuenteSelectConserv = document.querySelector("#conservacion")
    const conservacion = fuenteSelectConserv.value
    const fuenteSelectSalon = document.querySelector("#seleccion")
    const seleccion = fuenteSelectSalon.value
    const fuenteSelectExpo = document.querySelector("#expo")
    const exposicion = fuenteSelectExpo.value
    const fuenteSelectMedios = document.querySelector("#medios")
    const medios = fuenteSelectMedios.value
 
    const obraHoras =  parseFloat(horaReferencia) * parseFloat(horasTrabajadas)
    const precioFinalHoras = ((obraHoras) * (parseFloat(conservacion) * parseFloat(seleccion)) * (parseFloat(exposicion) * parseFloat(medios)) ).toFixed(2) 

    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("anio", JSON.stringify(anio))
    localStorage.setItem("tecnica", JSON.stringify(tecnica))
    localStorage.setItem("precio", JSON.stringify(precioFinalHoras))
    window.location.href="http://127.0.0.1:5500/repoEjercicios/html/mostrarResultado.html"
}