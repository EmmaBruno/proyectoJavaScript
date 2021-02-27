class shoppingCart {
    constructor(carrito, cursos) {
        var subtotal = 0
        this.carrito = carrito
        this.cursos = cursos
        this.verCompra = function(grillaCheckout) {
            let grilla = ""
            for (let i in this.carrito) {
                let r = cursos.find(c => c.cursoid === carrito[i])
                    grilla += `<tr>
                                <td>${r.nombre}</td>
                                <td>${r.horas}</td>
                                <td class="right">$ ${r.precio}</td>
                            </tr>`
                    subtotal += r.precio
                }
            grillaCheckout.innerHTML = grilla
        }
        this.verTotales = function(grillaTotales) {
            let grilla = `<tr><td>SUBTOTAL</td><td class="right">$ ${this.subtotal().toFixed(0)}</td></tr>
                          <tr><td>DESCUENTO</td><td class="right">-$ ${this.aplicoDescuento().toFixed(0)}</td></tr>
                          <tr class="blue lighten-4"><td>TOTAL</td><td class="right">$ ${this.total().toFixed(0)}</td></tr>`
                grillaTotales.innerHTML = grilla
        }
        this.subtotal = function() {
            return subtotal
        }
        this.aplicoDescuento = function() {
            switch (this.carrito.length) {
                case 1: //aplico un 0%
                    return (subtotal - (subtotal * 1))
                    break
                case 2: //aplico un 10%
                    return (subtotal - (subtotal * 0.90))
                    break
                case 3: //aplico un 10%
                    return (subtotal - (subtotal * 0.90))
                    break
                case 4: //aplico un 20%
                    return (subtotal - (subtotal * 0.80))
                    break
                default:
                    return (subtotal)
            }
        }
        this.total = function() {
            return Number(subtotal - this.aplicoDescuento())
        }
    }
}