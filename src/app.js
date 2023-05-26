const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const app = express();

app.use(express.urlencoded());

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

const routes = require('../src/routes/index.routes.js');

let numeroTel, mensaje;

app.post("/formulario", (req, res) => {
    console.log(req.body);

    let pagina = "<!doctype html><html><head></head><body>";

    numeroTel = req.body.numero;
    mensaje = req.body.mensaje;

    pagina += "<p>" + `El mensaje '${mensaje} ' ha sido enviado con exito al número ${numeroTel}`;
    pagina += "</p></body</html>"

    res.send(pagina);
})

client.on('ready', () => {
    try{
        client.sendMessage(`57${numeroTel}@c.us`, mensaje);
        console.log("El mensaje ha sido enviado con exito")
        console.log("Estoy esperando...")

    }catch (error){
        console.log(error);
    }
});

client.initialize();

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor escuchado en el puerto 3000')
});

app.use(routes);