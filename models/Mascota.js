const mongoose = require('mongoose');


const mascotaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre de la mascota es obligatorio'],
            trim: true,
        },
        especie: {
            type: String,
            required: [true, 'La especie es obligatoria'],
            enum: {
                values: ['Perro', 'Gato', 'Ave', 'Roedor', 'Reptil', 'Otro'],
                message: '{VALUE} no es una especie válida',
            },
        },
        raza: {
            type: String,
            trim: true,
        },
        edad: {
            type: Number,
            min: [0, 'La edad no puede ser negativa'],
        },
        cliente_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cliente',
            required: [true, 'El cliente_id es obligatorio'],
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Mascota', mascotaSchema);