var carrito = []
var changuito = "" 
let cursos = document.getElementById("cursos")
let grilladecursos = document.getElementById("grilladecursos")
let shoppingcart = document.getElementById("shoppingcart")
let checkout = document.getElementById("checkout")
let totales = document.getElementById("totales")

function cargoCursos(grilla) {
    let filas = "<tr><td>No hay clases para mostrar. Por favor, intente de nuevo más tarde.</td></tr>"
        if (CURSOS.length > 0) {
            filas = ""
            for (let i in CURSOS) {
                filas += `<tr>
                            <td>${CURSOS[i].nombre}</td>
                            <td>${CURSOS[i].descripcion}</td> 
                            <td>${CURSOS[i].horas}</td> 
                            <td>$ ${CURSOS[i].precio}</td>
                            <td><button class="btn yellow black-text waves-effect waves-black" onclick="agregarCurso(${CURSOS[i].cursoid})"><i class="material-icons">add_shopping_cart</i></button></td>
                         </tr>`
            }
        }
        grilla.innerHTML = filas
        itemsEnCarrito()
    }

document.addEventListener("DOMContentLoaded", cargoCursos(grilladecursos))

function itemsEnCarrito() {
    let leyendacarrito = "TOTAL DE CLASES EN SU CARRITO: "
        document.getElementById("itemscarrito").innerText = `${leyendacarrito} ${carrito.length}`
}

function agregarCurso(cursoid) {
    let filtro = carrito.find(c => c == cursoid)
        if (filtro == cursoid) { //si entra acá, es porque existe
            alert("No puede agregar más de una vez la misma clase.")
        } else { //puedo agregarlo
            carrito.push(cursoid)
            alert("Gracias por comprar nuestra clase.")
            itemsEnCarrito()
        }
}