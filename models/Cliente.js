const mongoose = require('mongoose');


const clienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true,
        },
        telefono: {
            type: String,
            required: [true, 'El teléfono es obligatorio'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'El email es obligatorio'],
            unique: true,
            trim: true,
            lowercase: true,
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Cliente', clienteSchema);