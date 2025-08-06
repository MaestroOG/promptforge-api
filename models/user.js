const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    apiKey: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

module.exports = User;