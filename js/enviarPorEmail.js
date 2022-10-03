const email = document.querySelector("#enviarEmail")
email.addEventListener("submit", enviarPorEmail)

function enviarPorEmail(e){
  e.preventDefault()
  getStorageEmail()
  infoEnviada()
}


const infoEnviada = ()=>{
  Swal.fire({
    position: 'center',
    imageUrl: '../assets/mailEnviado.jpg',
    text: 'La información ha sido enviada a tu mail!',
    showConfirmButton: false,
    timer: 2500
  })
}

const getStorageEmail = ()=>{
    infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
    infoDescuento = JSON.parse(localStorage.getItem("infoDescuento")) 
    infoInteres = JSON.parse( localStorage.getItem("infoInteres")) 
}
