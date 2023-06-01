const mongoose = require('mongoose');

const TiendaSchema = mongoose.Schema({
    
    departamento: {
        type: String,
        require: true
    },
    distrito: {
        type: String,
        require: true
    },
    cantidad: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Tienda', TiendaSchema)