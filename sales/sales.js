// Importar los datos de ventas
var sales = require('./sales.json');

//Funcion para obtener todas las ventas
function getSales(req, res) {
    res.json(sales);
}

//Funcion para obtener un venta por id
function getSalesById(req, res) {
    var id = parseInt(req.params.id);
    var sale = sales.find(function(sale) {
        return sale.id == id;
    });
    if (!sale) {
        res.status(404).send('La venta no existe');
        return;
    }

    res.json(sale);
}

//Exportar las funciones
module.exports= {
    getSales,
    getSalesById,
}