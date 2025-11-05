const express = require('express');
const router = express.Router();
const Mascota = require('../models/Mascota');
const Cliente = require('../models/Cliente');




// PUT actualizar mascota
router.put('/:id', async (req, res) => {
    try {
        const actualizada = await Mascota.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!actualizada) return res.status(404).json({ mensaje: 'Mascota no encontrada' });
        res.json(actualizada);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = {};
            for (const key in error.errors) {
                errores[key] = error.errors[key].message;
            }
            return res.status(400).json({ mensaje: 'Error de validación', errors: errores });
        }
        res.status(500).json({ mensaje: 'Error al actualizar mascota', error: error.message });
    }
});

// DELETE mascota
router.delete('/:id', async (req, res) => {
    try {
        const eliminada = await Mascota.findByIdAndDelete(req.params.id);
        if (!eliminada) return res.status(404).json({ mensaje: 'Mascota no encontrada' });
        res.json({ mensaje: 'Mascota eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar mascota', error: error.message });
    }
});


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