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

module.exports = {
    validateEmailAndPassword
}