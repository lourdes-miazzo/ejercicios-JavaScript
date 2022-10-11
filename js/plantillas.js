//PLANTILLAS QUE SE CARGARAN SEGÚN SE LOGRE ACCEDER A TRY O A ERROR DE FETCH
const cargarError = ()=>{
    return ` <div class="error ms-auto me-auto">
                <h1>Ups! error!</h1>
                <p>La página que intentas solicitar no ha podido cargarse.</p>
                <p>Intenta nuevamente en unos minutos.</p>
            </div>`
}

const cargarArtistas = (info)=>{
    const {imagen, nombre, url, instagram} = info
    return `<div class="cardArt">
                <img class="img" src="${imagen}">
                <div class="card-body">
                    <h3>${nombre}</h3>
                    <a target="_blank" href="${url}"><p class="pCard">${instagram}</p></a>
                </div>
            </div>`
}

