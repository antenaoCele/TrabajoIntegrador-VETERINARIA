require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');

app.use(express.json());


app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al conectar a MongoDB', error: err.message });
    }
});

// Rutas
const clientesRouter = require('./routes/clientes');
const mascotasRouter = require('./routes/mascotas');

app.use('/clientes', clientesRouter);
app.use('/mascotas', mascotasRouter);


app.get('/', (req, res) => {
    res.send({ mensaje: 'API Veterinaria funcionando' });
});


module.exports = app;
