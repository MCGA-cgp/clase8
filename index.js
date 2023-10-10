// Importo App  
var app = require('./app');

//Defino el puerto
var port = 3000;


// Levanto el servidor
app.listen(port, function() {
    console.info(`Corriendo en el puerto ${port}`);
});
