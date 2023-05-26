controller = {}
const path = require('path');

controller.index = (req, res) => {
    res.end('Conexion establecida desde el controlador');
}

controller.formulario = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/formulario.html'));
}

module.exports = controller;