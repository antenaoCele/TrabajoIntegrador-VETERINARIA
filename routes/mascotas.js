const express = require('express');
const router = express.Router();
const Mascota = require('../models/Mascota');
const Cliente = require('../models/Cliente');


// POST 
router.post('/', async (req, res) => {
    try {
        const { cliente_id } = req.body;
        if (!cliente_id) return res.status(400).json({ mensaje: 'cliente_id es obligatorio' });


        // Verificar que el cliente exista
        const cliente = await Cliente.findById(cliente_id);
        if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });


        const nuevaMascota = await Mascota.create(req.body);
        res.status(201).json(nuevaMascota);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = {};
            for (const key in error.errors) {
                errores[key] = error.errors[key].message;
            }
            return res.status(400).json({ mensaje: 'Error de validación', errors: errores });
        }
        res.status(500).json({ mensaje: 'Error al crear mascota', error: error.message });
    }
});


// GET 
router.get('/', async (req, res) => {
    try {
        const filtro = {};
        if (req.query.cliente_id) {
            filtro.cliente_id = req.query.cliente_id;
        }


        const mascotas = await Mascota.find(filtro).populate('cliente_id', 'nombre email telefono');
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener mascotas', error: error.message });
    }
});


module.exports = router;