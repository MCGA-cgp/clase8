// Importar los datos de productos
var products = require('./products.json');

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
    if (!product) {
        res.status(404).send('El producto no existe');
        return;
    }

    res.json(product);
}

// Funcion para agregar un producto
function addProduct(req, res) {
    var product = req.body;
    var newProduct = {
        id: products.length + 1,
        name: product.name,
        price: product.price,
        stock: product.stock,
    };
    products.push(newProduct);
    res.json(newProduct);
}

//Funcion para actualizar un producto
function updateProduct(req, res) {
    const id = parseInt(req.params.id);
    var product = req.body;
    
    var originalProduct = products.find(function(product) {
        return product.id == id;
    });

    originalProduct.name = product.name ? product.name : originalProduct.name;
    originalProduct.price = product.price ? product.price : originalProduct.price;
    originalProduct.stock = product.stock ? product.stock : originalProduct.stock;
    
    res.json(originalProduct);
}

// Funcion para eliminar un producto
function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    
    products = products.filter(function(product) {
        return product.id != id;
    });


    res.status(200).send();
}

//Exportar las funciones
module.exports= {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}