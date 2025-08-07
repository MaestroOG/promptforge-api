const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    fullPrompt: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Prompt = mongoose.model("Prompt", promptSchema);

module.exports = Prompt;