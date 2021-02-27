let CURSOS = [
            {
            "cursoid": 1,
            "nombre": "Clase individual presencial",
            "descripcion": "Clase individual en parques, gimnasios o tu hogar, el profesor te proveerá los elementos para la clase, pero siempre es recomendable tener elementos propios.",
            "horas": "1 hs",
            "precio": 700
            },
            {
            "cursoid": 2,
            "nombre": "Clase individual virtual",
            "descripcion": "Clase individual desde la comodidad de tu hogar, debes contar con los elementos que el profesor te indique.",
            "horas": "1 hs",
            "precio": 600
            },
            {
            "cursoid": 3,
            "nombre": "Clase grupal presencial",
            "descripcion": "Clase grupal en parques o gimnasios, el profesor te proveerá los elementos para la clase, pero siempre es recomendable tener elementos propios.",
            "horas": "1 hs",
            "precio": 500
            },
            {
            "cursoid": 4,
            "nombre": "Clase grupal virtual",
            "descripcion": "Clase grupal desde la comodidad de tu hogar, debes contar con los elementos que el profesor te indique.",
            "horas": "1 hs",
            "precio": 400
            }
        ]

let selectedProducts = []; //Arreglo done iran los productos
let btnPedir = document.getElementById("btnPedido"); //Boton que agrega el pedido
let inputCant = document.getElementById("cantPed"); // Input donde se ingresa la cantidad del pedido
function onSelectClick(event) { 
  const idProduct = event.target.dataset.id;
  selectedProduct = products.find(function(product) {
    if(product.id === idProduct) {
      return product;
    }
  });
  selectedProducts.push(selectedProduct);
  localStorage.setItem("codigo",idProduct);
  event.preventDefault();
}
// 17:37
// Y aqui sería donde lo llamo
// 17:38
const btnProducts = document.querySelectorAll('.btnAgr');
  btnProducts.forEach(function(btnProduct) {
    btnProduct.addEventListener('click', onSelectClick);
    
  })