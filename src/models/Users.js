const mongoose = require('mongoose')

const userSchema = new moongose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model('User', userSchema)