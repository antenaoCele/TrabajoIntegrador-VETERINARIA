require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./config/db');


app.use(express.json());

dbConnect();


// Rutas
const clientesRouter = require('./routes/clientes');
const mascotasRouter = require('./routes/mascotas');


app.use('/clientes', clientesRouter);
app.use('/mascotas', mascotasRouter);


// Root
app.get('/', (req, res) => {
    res.send({ mensaje: 'API Veterinaria funcionando' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando http://localhost:${PORT}`));