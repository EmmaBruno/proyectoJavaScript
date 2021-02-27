let HTMLCard = ""
let contenidoJSON = []

function cargoContenido() {
   $.ajax({
      url: "js/api.json",
      dataType: "json",
      success: function(contenidoJSON) {
         localStorage.contenidoJSON = JSON.stringify(contenidoJSON)
         $.each(contenidoJSON, function(i) {
            HTMLCard += `<div class="col s12 m6 l3">
                           <div class="card z-depth-2">
                           <div class="card-image">
                              <img src="${contenidoJSON[i].foto}" alt="${contenidoJSON[i].titulo}" id="ejercicios-"${contenidoJSON[i].id} max-width="100px">
                              <button class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" onclick="verDetalle(${contenidoJSON[i].id})">search</i></button>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">Ejercicio: <span class="white-text">${contenidoJSON[i].ejercicio}</span></p>
                              <p class="yellow-text">Dificultad: <span class="white-text">${contenidoJSON[i].dificultad}</span></p>
                           </div>
                           </div>
                        </div>`
         })
         $("#contenido").html(HTMLCard)
      },
      error: function() {
         console.error(`Ocurrió un error... :(`)
         HTMLCard = `<div class="center white-text"> 
                        <br><br> 
                        <h4>El contenido no está disponible.</h4> 
                        <br><br> 
                        <h5>Intenta en unos minutos, por favor.</h5>
                        <br><br> 
                        <i class="large material-icons">sentiment_very_dissatisfied</i> 
                        <br><br> 
                     </div>`
         $("#contenido").html(HTMLCard)
      } 
   })
}

setTimeout(() => {
   cargoContenido()
   $('#contenido').fadeIn("fast", function() {
      $('#cargando').fadeOut(200, function() {
         $('#cargando').remove()
      })
   })
}, 2000)

function verDetalle(i) {
   if (contenidoJSON.length == 0)
      contenidoJSON = JSON.parse(localStorage.contenidoJSON)
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != undefined) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error(`No se encontró el elemento: ${i}`)
         M.toast({html: "Contenido no disponible :(", classes: "red darken-3 white-text z-depth-3"})
      }
}