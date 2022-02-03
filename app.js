const express = require('express');
const { homedir } = require('os');
const app = express();
const path = require('path');
const port = 3033;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'trabajosRealizados.html')));
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'contacto.html')));


app.listen(port, () => console.log('Servidor funcionando en el puerto ' + port))



