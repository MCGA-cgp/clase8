// Importar los datos de productos
const products = require('./products.json');

//Funcion para obtener todos los productos
function getProducts(req, res) {
    res.json(products);
}

//Funcion para obtener un producto por id
function getProductById(req, res) {
    var id = parseInt(req.params.id);
    var product = products.find(function(product) {
        return product.id == id;
    });
    res.json(product);
}

//Exportar las funciones
module.exports= {
    getProducts,
    getProductById
}