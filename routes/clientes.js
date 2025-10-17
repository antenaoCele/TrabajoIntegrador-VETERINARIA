const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');


// GET todos los clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener clientes', error: error.message });
    }
});

// GET cliente por ID
router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener cliente', error: error.message });
    }
});



// POST 
router.post('/', async (req, res) => {
    try {
        const nuevo = await Cliente.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = {};
            for (const key in error.errors) {
                errores[key] = error.errors[key].message;
            }
            return res.status(400).json({ mensaje: 'Error de validación', errors: errores });
        }
        if (error.code === 11000) {
            return res.status(400).json({ mensaje: 'Email ya registrado' });
        }
        res.status(500).json({ mensaje: 'Error al crear cliente', error: error.message });
    }
});


// PUT 
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!actualizado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(actualizado);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = {};
            for (const key in error.errors) {
                errores[key] = error.errors[key].message;
            }
            return res.status(400).json({ mensaje: 'Error de validación', errors: errores });
        }
        res.status(500).json({ mensaje: 'Error al actualizar cliente', error: error.message });
    }
});


// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar cliente', error: error.message });
    }
});


module.exports = router;