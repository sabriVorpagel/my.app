const express = require('express');

const app = express();

app.get('/', (req ,res) => res.send('HOLA MUNDO!!') )
app.get('/salida', (req ,res) => res.send('chauuuuu!!') )

app.listen(3030, () => console.log ("Servidor corrriendo in port 3030"))
