const mongoose = require('mongoose');

const connectDB = async (dbURI) => {
    return mongoose.connect(dbURI)
        .then(() => console.log('MongoDB Connected'))
}

module.exports = connectDB;