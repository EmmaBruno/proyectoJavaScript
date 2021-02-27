let HTMLTabla = ""
let HTMLvideo = ""
let jsonContenido = ""

$(document).ready(function() {
   if (localStorage.contenido != undefined) {
      jsonContenido = JSON.parse(localStorage.contenido)
      HTMLTabla = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                        <img src="${jsonContenido.foto}" width="200px">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text">EJERCICIO</td>
                           <td><h5>${jsonContenido.ejercicio}</h5></td>
                           </tr>
                           <tr>
                           <td class="yellow-text">DIFICULTAD</td>
                           <td>${jsonContenido.dificultad}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">DESCRIPCION</td>
                           <td>${jsonContenido.descripcion}</td>
                           </tr>
                           <tr>
                        </tbody>
                     </table>
                     </div>
                  </div>`
      if (jsonContenido.video != "")
         HTMLvideo = `<div class="video-container">
                           <iframe width="560" height="315" src="${jsonContenido.video}" frameborder="0" encrypted-media; allowfullscreen></iframe>
                        </div>`
         $("#video").html(HTMLvideo)
   }
   $('#contenido').html(HTMLTabla)
})

$(window).ready(function() {
   $('nav').fadeIn(800, function() {
      $('h4').fadeIn(500)
      $('#contenido').slideDown("slow", function() {
         $('#video').fadeIn()
      })
   })

   $("#retornar").click(function() {
      location.target = "_self"
      location.href = "/ejercicios.html"
   })
})