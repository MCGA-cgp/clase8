var clients = require('./clients.json');

function getClients(req, res) {
    res.json(clients);
}

function addClients(req, res) {
    var client = req.body;
    var newClient = {
        id: clients.length + 1,
        first_name: client.first_name,
        last_name: client.last_name,
    };
    clients.push(newClient);
    res.json(newClient);
}

function updateClients(req, res) {
    const id = parseInt(req.params.id);
    var client = req.body;
    
    var originalClients = clients.find(function(client) {
        return client.id == id;
    });

    originalClients.first_name = client.first_name ? client.first_name : originalClients.first_name;
    originalClients.last_name = client.last_name ? client.last_name : originalClients.last_name;
    
    res.json(originalClients);
}

// Funcion para eliminar un cliente
function deleteClients(req, res) {
    const id = parseInt(req.params.id);
    
    clients = clients.filter(function(clients) {
        return clients.id != id;
    });


    res.status(200).send();
}

module.exports= {
    getClients,
    addClients,
    updateClients,
    deleteClients,
}