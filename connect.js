const mongoose = require('mongoose');

const connectDB = async (dbURI) => {
    return mongoose.connect(String(dbURI))
        .then(() => console.log('MongoDB Connected'))
}

module.exports = connectDB;