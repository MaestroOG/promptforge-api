const User = require('../models/user')

const validateEmailAndPassword = (req, res, next) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!email || !password || password.trim().length < 8 || !isValid) {
        return res.json({ message: 'Invalid credentials' })
    } else {
        return next();
    }
}

const checkValidRequest = async (req, res, next) => {
    try {
        const apiKey = req.body?.apiKey;

        if (!apiKey) {
            return res.status(401).json({ message: 'Please register first and get your API key' });
        }

        const user = await User.findOne({ apiKey });

        if (!user) {
            return res.status(403).json({ message: 'Invalid API Key' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('API Key Middleware Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    validateEmailAndPassword,
    checkValidRequest
}