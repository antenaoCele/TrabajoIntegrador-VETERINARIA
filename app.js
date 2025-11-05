const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const clienteRoutes = require('./routes/clientes');
const mascotaRoutes = require('./routes/mascotas');

const app = express();

//CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/clientes', clienteRoutes);
app.use('/mascotas', mascotaRoutes);


app.get('/', (req, res) => {
    res.send('API de Veterinaria funcionando');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app; 