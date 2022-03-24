/* let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start(); // /* */
  
const express = require('express');
const app = express();
const path = require('path');
const port = 3040;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'index.html')))
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'galeria.html')))
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'contacto.html')))

app.listen(port, () => console.log ('Servidor funcionando en el puerto ' + port))

