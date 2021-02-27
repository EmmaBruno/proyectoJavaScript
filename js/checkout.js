function muestroCheckout() {
    if (carrito.length === 0) {
        alert("Todavía no realizó ninguna compra.")
    } else {
        changuito = new shoppingCart(carrito, CURSOS)
        changuito.verCompra(checkout)
        changuito.verTotales(totales)
        shoppingcart.classList.remove("hide")    
        cursos.classList.add("hide")    
    }
}

function volverAlListadoDeCursos() {
    shoppingcart.classList.add("hide")    
    cursos.classList.remove("hide")    
}

function confirmarCompra() {
    document.body.style.cursor  = "wait"
    setTimeout(() => {
        carrito = []
        alert("Su compra finalizó con éxito")
        volverAlListadoDeCursos()
        itemsEnCarrito()
        document.body.style.cursor  = "default"
    }, 2500);
}