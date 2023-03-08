const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    profit: Number
})

const FilmeModel = mongoose.model('Filmes', filmeSchema)

module.exports = FilmeModel