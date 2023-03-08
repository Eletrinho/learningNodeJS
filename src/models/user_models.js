const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date, 
        default: Date.now
    }
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel