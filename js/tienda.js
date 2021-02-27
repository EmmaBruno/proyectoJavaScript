const searchProducts = (keySearch) => {
    $.ajax(
    {
        method : 'POST',
        url: 'https://api.mercadolibre.com/sites/MLA/search',
        data: {
            q: keySearch
        }
    }
    ).done( (data) => {
        console.log(data.results);
        renderProducts(data.results);
    }).fail( (error)=>{
        console.log('hubo un error .' + error);
    });
}

function getCardHtml(product) {
    return `
        <div class="col-sm-4">
            <div class="card">
                <a href="#" class="imageProduct" onClick="getProduct('${product.id}', '${product.thumbnail}')"><img src="${product.thumbnail}" width="100%"></a>
                <div class="card-body">
                    <p class="card-text">${product.title}</p>
                    <p class="card-text">$${product.price}</p>
                </div>
            </div>
        </div>             
    `;
}

function renderProducts(products) {
    $('#productsContainer').empty();
    products.forEach(product => {
        $('#productsContainer').append(getCardHtml(product));
    });
}

$("form[name='searchForm']").validate(
    {
        rules: {
            search: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            search: {
                required: 'El campo es obligatorio',
                minlength: 'El campo debe tener un minimo de 3 caracteres'
            }
        },
        submitHandler: (event) => {
            console.log(event.elements.search.value);
            const keySearch = event.elements.search.value;
            searchProducts(keySearch);
        }
    }
)