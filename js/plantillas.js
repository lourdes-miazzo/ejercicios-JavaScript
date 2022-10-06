const cargarError = ()=>{
    return `<div class="error">
                <h1>ups! error!</h1>
                <p>la página que intentas solicitar no ha podido cargarse.</p>
                <p>intenta nuevamente en unos minutos</p>
            </div>`
}

const cargarArtistas = (info)=>{
    const {imagen, nombre, url, instagram} = info
    return `<div class="cardArt">
                <img class="img" src="${imagen}">
                <div class="card-body">
                    <h3>${nombre}</h3>
                    <a target="_blank" href="${url}"><p>${instagram}</p></a>
                </div>
            </div>`
}

